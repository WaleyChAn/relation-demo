<template>
  <div class="program-relation"
       v-loading="true">
    <RelationGraph ref="seeksRelationGraph"
                   :options="graphOptions"
                   :on-node-click="onNodeClick"
                   :on-line-click="onLineClick">
      <div slot="node"
           slot-scope="{ node }">
        <div v-html="node.text"
             class="program-relation-item"></div>
      </div>
    </RelationGraph>
  </div>
</template>

<script>
// 基础样式
import './index.css'
// 引入关系图组件，建议在.eslintignore中忽略该文件
import RelationGraph from '@/components/relation-graph'
import { getUpstreamData, getDownstreamData, getRelatedData } from './fake-data'

export default {
  name: 'ProgramRelation',
  components: {
    RelationGraph
  },
  data () {
    return {
      rootData: {
        id: 'root',
        text: '当前程序 <br /> WD-IDE-D19',
        // width: 120,
        // height: 120,
        color: '#0dd2d9',
        borderColor: '#9dfcff',
        data: {
          name: '基层分工会组织管理流程',
          procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8',
          procCode: 'MP-326-014'
        }
      },
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
              color: '#026baf',
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
              color: '#ee6e00',
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
              color: '#03994c',
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

      const upstreamChildrenLine = upstreamChildren.map(item => {
        return {
          color: '#8ccdf8',
          fontColor: '#026baf',
          from: item.parentId,
          to: item.id,
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
      const relatedChildrenLine = relatedChildren.map(item => {
        return {
          color: '#8df6b8',
          fontColor: '#03994c',
          from: item.parentId,
          to: item.id,
          styleClass: 'line-dashed',
          text: '相关',
          isHideArrow: true
        }
      })

      const data = {
        rootId: 'root',
        nodes: [
          this.rootData,
          ...upstreamData,
          ...downstreamData,
          ...relatedData,
          ...upstreamChildren,
          ...downstreamChildren,
          ...relatedChildren
        ],
        lines: [
          ...upstreamLine,
          ...downstreamLine,
          ...relatedLine,
          ...upstreamChildrenLine,
          ...downstreamChildrenLine,
          ...relatedChildrenLine
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
    }
  }
}
</script>
