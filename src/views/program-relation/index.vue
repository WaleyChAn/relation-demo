<template>
  <div class="program-relation">
    <div ref="refRelationWrapper"
         class="program-relation-wrapper"
         @click="isShowNodeMenuPanel = false">
      <RelationGraph ref="seeksRelationGraph"
                     :options="graphOptions"
                     :on-node-click="onNodeClick"
                     :on-line-click="onLineClick">
        <div slot="node"
             slot-scope="{ node }"
             class="program-relation-item"
             v-html="node.text"
             @contextmenu.prevent.stop="showNodeMenus(node, $event)"></div>
      </RelationGraph>
    </div>
    <div v-show="isShowNodeMenuPanel"
         :style="{left: nodeMenuPanelPosition.x + 'px', top: nodeMenuPanelPosition.y + 'px' }"
         class="program-relation-menu">
      <div class="menu-title">对这个节点进行操作：</div>
      <div class="menu-item"
           @click.stop="doAction('操作1')">操作1</div>
      <div class="menu-item"
           @click.stop="doAction('操作2')">操作2</div>
      <div class="menu-item"
           @click.stop="doAction('操作3')">操作3</div>
      <div class="menu-item"
           @click.stop="doAction('操作4')">操作4</div>
    </div>
  </div>
</template>

<script>
// 基础样式
import './index.css'
// 引入关系图组件，建议在.eslintignore中忽略该文件
// 文档 http://relation-graph.com/#/docs/start
import RelationGraph from '@/components/relation-graph'
import { getUpstreamData, getDownstreamData, getRelatedData } from './real-data'

export default {
  name: 'ProgramRelation',
  components: {
    RelationGraph
  },
  data () {
    return {
      rootData: {
        id: 'root',
        text: '苍南项目部组织与基本运作规则 <br /> BJ-30M-010',
        color: '#0dd2d9',
        borderColor: '#9dfcff',
        data: {
          name: '苍南项目部组织与基本运作规则',
          procedureId: 'root',
          procCode: 'BJ-30M-010'
        }
      },
      isShowNodeMenuPanel: false,
      nodeMenuPanelPosition: { x: 0, y: 0 },
      currentNode: null,
      graphOptions: {

      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      let { data: upstreamData } = await getUpstreamData()
      let { data: downstreamData } = await getDownstreamData()
      let { data: relatedData } = await getRelatedData()

      // 相连点对应的上、下、相关的点
      let upstreamChildren = []
      let downstreamChildren = []
      let relatedChildren = []

      // 点
      upstreamData = upstreamData.map(item => {
        const { data } = item
        if (data.upstreamData && data.upstreamData.length > 0) {
          data.upstreamData.map(child => {
            upstreamChildren.push({
              borderColor: '#8ccdf8',
              color: '#36a5ec',
              parentId: item.id,
              ...child
            })
          })
        }

        return {
          borderColor: '#8ccdf8',
          color: '#026baf',
          ...item
        }
      })
      downstreamData = downstreamData.map(item => {
        const { data } = item
        if (data.downstreamData && data.downstreamData.length > 0) {
          data.downstreamData.map(child => {
            downstreamChildren.push({
              borderColor: '#fcb68e',
              color: '#f0a15d',
              parentId: item.id,
              ...child
            })
          })
        }

        return {
          borderColor: '#fcb68e',
          color: '#ee6e00',
          ...item
        }
      })
      relatedData = relatedData.map(item => {
        const { data } = item
        if (data.relatedData && data.relatedData.length > 0) {
          data.relatedData.map(child => {
            relatedChildren.push({
              borderColor: '#8df6b8',
              color: '#55d895',
              parentId: item.id,
              ...child
            })
          })
        }

        return {
          borderColor: '#8df6b8',
          color: '#03994c',
          ...item
        }
      })

      // 线
      const upstreamLine = upstreamData.map(item => {
        return {
          color: '#8ccdf8',
          fontColor: '#026baf',
          from: item.id,
          to: 'root',
          text: '上游'
        }
      })
      const downstreamLine = downstreamData.map(item => {
        return {
          color: '#fcb68e',
          fontColor: '#ee6e00',
          from: 'root',
          to: item.id,
          text: '下游'
        }
      })
      const relatedLine = relatedData.map(item => {
        return {
          color: '#8df6b8',
          fontColor: '#03994c',
          from: 'root',
          to: item.id,
          styleClass: 'line-dashed',
          text: '相关',
          isHideArrow: true
        }
      })
      // 相连点对应的上、下、相关的线
      const upstreamChildrenLine = upstreamChildren.map(item => {
        return {
          color: '#8ccdf8',
          fontColor: '#026baf',
          from: item.id,
          to: item.parentId,
          text: '上游'
        }
      })
      const downstreamChildrenLine = downstreamChildren.map(item => {
        return {
          color: '#fcb68e',
          fontColor: '#ee6e00',
          from: item.parentId,
          to: item.id,
          text: '下游'
        }
      })
      // const relatedChildrenLine = relatedChildren.map(item => {
      //   return {
      //     color: '#8df6b8',
      //     fontColor: '#03994c',
      //     from: item.parentId,
      //     to: item.id,
      //     styleClass: 'line-dashed',
      //     text: '相关',
      //     isHideArrow: true
      //   }
      // })

      const data = {
        rootId: 'root',
        nodes: [
          this.rootData,
          ...upstreamData,
          ...downstreamData,
          ...relatedData,
          ...upstreamChildren,
          ...downstreamChildren
          // ...relatedChildren
        ],
        lines: [
          ...upstreamLine,
          ...downstreamLine,
          ...relatedLine,
          ...upstreamChildrenLine,
          ...downstreamChildrenLine
          // ...relatedChildrenLine
        ]
      }

      this.$refs.seeksRelationGraph.setJsonData(data, (graphInstance) => {
        // 这些写上当图谱初始化完成后需要执行的代码
      })
    },
    onNodeClick (nodeObject, $event) {
      console.log('onNodeClick:', nodeObject)
    },
    onLineClick (lineObject, linkObject, $event) {
      console.log('onLineClick:', lineObject)
    },
    showNodeMenus (nodeObject, $event) {
      this.currentNode = nodeObject
      const basePosition = this.$refs.refRelationWrapper.getBoundingClientRect()

      console.log('showNodeMenus:', $event, basePosition)
      this.isShowNodeMenuPanel = true
      this.nodeMenuPanelPosition.x = $event.clientX - basePosition.x
      this.nodeMenuPanelPosition.y = $event.clientY - basePosition.y
    },
    doAction (actionName) {
      console.log('对节点【' + this.currentNode.text + '】进行了：' + actionName)
      this.isShowNodeMenuPanel = false
    }
  }
}
</script>
