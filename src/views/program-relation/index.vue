<template>
  <div class="program-relation">
    <RelationGraph ref="seeksRelationGraph"
                   :options="graphOptions"
                   :on-node-click="onNodeClick"
                   :on-line-click="onLineClick">
      <!-- <div slot="node"
           slot-scope="{ node }">
        <div>{{ node.text }}</div>
      </div> -->
    </RelationGraph>
  </div>
</template>

<script>
// 基础样式
import './index.css'
// 引入关系图组件，建议在.eslintignore中忽略该文件
import RelationGraph from '@/components/relation-graph'

export default {
  name: 'ProgramRelation',
  components: {
    RelationGraph
  },
  data () {
    return {
      graphOptions: {
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const data = {
        rootId: '2',
        nodes: [
          // 注意：在节点配置信息中，你的自定义属性需要像下面这样放到data标签中，否则数据会丢失
          { id: '1', text: '节点-1', data: { myicon: 'el-icon-star-on' } },
          { id: '2', text: '节点-2', data: { myicon: 'el-icon-setting' } },
          { id: '3', text: '节点-3', data: { myicon: 'el-icon-setting' } },
          { id: '4', text: '节点-4', data: { myicon: 'el-icon-star-on' } },
          { id: '6', text: '节点-6', data: { myicon: 'el-icon-setting' } },
          { id: '7', text: '节点-7', data: { myicon: 'el-icon-setting' } },
          { id: '8', text: '节点-8', data: { myicon: 'el-icon-star-on' } },
          { id: '9', text: '节点-9', data: { myicon: 'el-icon-headset' } },
          { id: '71', text: '节点-71', data: { myicon: 'el-icon-headset' } },
          { id: '72', text: '节点-72', data: { myicon: 'el-icon-s-tools' } },
          { id: '73', text: '节点-73', data: { myicon: 'el-icon-star-on' } },
          { id: '81', text: '节点-81', data: { myicon: 'el-icon-s-promotion' } },
          { id: '82', text: '节点-82', data: { myicon: 'el-icon-s-promotion' } },
          { id: '83', text: '节点-83', data: { myicon: 'el-icon-star-on' } },
          { id: '84', text: '节点-84', data: { myicon: 'el-icon-s-promotion' } },
          { id: '85', text: '节点-85', data: { myicon: 'el-icon-sunny' } },
          { id: '91', text: '节点-91', data: { myicon: 'el-icon-sunny' } },
          { id: '92', text: '节点-82', data: { myicon: 'el-icon-sunny' } },
          { id: '51', text: '节点-51', data: { myicon: 'el-icon-sunny' } },
          { id: '52', text: '节点-52', data: { myicon: 'el-icon-sunny' } },
          { id: '53', text: '节点-53', data: { myicon: 'el-icon-sunny' } },
          { id: '54', text: '节点-54', data: { myicon: 'el-icon-sunny' } },
          { id: '55', text: '节点-55', data: { myicon: 'el-icon-sunny' } },
          { id: '5', text: '节点-5', data: { myicon: 'el-icon-sunny' } }
        ],
        lines: [
          { from: '7', to: '71', text: '测hi是是', styleClass: 'c-rg-line-checked' },
          { from: '7', to: '72', text: '投资' },
          { from: '7', to: '73', text: '投资' },
          { from: '8', to: '81', text: '投资' },
          { from: '8', to: '82', text: '投资' },
          { from: '8', to: '83', text: '投资' },
          { from: '8', to: '84', text: '投资' },
          { from: '8', to: '85', text: '投资' },
          { from: '9', to: '91', text: '投资' },
          { from: '9', to: '92', text: '投资' },
          { from: '5', to: '51', text: '投资1' },
          { from: '5', to: '52', text: '投资' },
          { from: '5', to: '53', text: '投资3' },
          { from: '5', to: '54', text: '投资4' },
          { from: '5', to: '55', text: '投资' },
          { from: '1', to: '2', text: '投资' },
          { from: '3', to: '1', text: '高管' },
          { from: '4', to: '2', text: '高管' },
          { from: '6', to: '2', text: '高管' },
          { from: '7', to: '2', text: '高管' },
          { from: '8', to: '2', text: '高管' },
          { from: '9', to: '2', text: '高管' },
          { from: '1', to: '5', text: '投资' }
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
