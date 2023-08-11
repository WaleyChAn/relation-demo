export const getUpstreamData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        // 注意：在节点配置信息中，你的自定义属性需要像下面这样放到data标签中，否则数据会丢失
        data: [
          {
            id: '000',
            text: '公司组织与基本运作规则 <br /> MP-215-002',
            data: {
              name: '公司组织与基本运作规则',
              procedureId: '000',
              procCode: 'MP-215-002',
              upstreamData: [
                {
                  id: '000-0',
                  text: '工程公司董事会授权管理办法 <br /> MP-100-001',
                  data: {
                    name: '工程公司董事会授权管理办法',
                    procedureId: '000-0',
                    procCode: 'MP-100-001'
                  }
                },
                {
                  id: '000-1',
                  text: '公司管理政策 <br /> MP-100-004',
                  data: {
                    name: '公司管理政策',
                    procedureId: '000-1',
                    procCode: 'MP-100-004'
                  }
                },
                {
                  id: '000-2',
                  text: '工程公司贯彻落实“三重一大”决策制度实施办法 <br /> MP-100-005',
                  data: {
                    name: '工程公司贯彻落实“三重一大”决策制度实施办法',
                    procedureId: '000-2',
                    procCode: 'MP-100-005'
                  }
                }
              ]
            }
          },
          {
            id: '001',
            text: '公司核电工程项目组织与运作规则 <br /> MP-215-003',
            data: {
              name: '公司核电工程项目组织与运作规则',
              procedureId: '001',
              procCode: 'MP-215-003',
              upstreamData: [
                {
                  id: '001-0',
                  text: '公司总经理授权管理办法 <br /> MP-100-002',
                  data: {
                    name: '公司总经理授权管理办法',
                    procedureId: '001-0',
                    procCode: 'MP-100-002'
                  }
                },
                {
                  id: '001-1',
                  text: '公司管理政策 <br /> MP-100-004',
                  data: {
                    name: '公司管理政策',
                    procedureId: '001-1',
                    procCode: 'MP-100-004'
                  }
                },
                {
                  id: '001-2',
                  text: '工程公司贯彻落实“三重一大”决策制度实施办法 <br /> MP-100-005',
                  data: {
                    name: '工程公司贯彻落实“三重一大”决策制度实施办法',
                    procedureId: '001-2',
                    procCode: 'MP-100-005'
                  }
                }
              ]
            }
          }
        ],
        message: 'success'
      })
    }, 500)
  })
}

export const getDownstreamData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: [
          {
            id: '100',
            text: '苍南项目部设计代表办公室组织机构与职责分工 <br /> WD-CNE-019',
            data: {
              name: '苍南项目部设计代表办公室组织机构与职责分工',
              procedureid: '100',
              procCode: 'WD-CNE-019'
            }
          },
          {
            id: '101',
            text: '苍南项目部现场设备服务办公室组织架构与职责分工 <br /> WD-CNE-022',
            data: {
              name: '苍南项目部现场设备服务办公室组织架构与职责分工',
              procedureid: '101',
              procCode: 'WD-CNE-022'
            }
          },
          {
            id: '102',
            text: '苍南项目部施工分部组织机构及职责分工 <br /> WD-CNE-001',
            data: {
              name: '苍南项目部施工分部组织机构及职责分工',
              procedureid: '102',
              procCode: 'WD-CNE-001',
              downstreamData: [
                {
                  id: '102-0',
                  text: '苍南项目部综合分部组织机构及职责分工 <br /> WD-CNE-008',
                  data: {
                    name: '苍南项目部综合分部组织机构及职责分工',
                    procedureid: '102-0',
                    procCode: 'WD-CNE-008'
                  }
                },
                {
                  id: '102-1',
                  text: '苍南项目部施工分部土建施工队组织机构与职责分工 <br /> WD-CNE-009',
                  data: {
                    name: '苍南项目部施工分部土建施工队组织机构与职责分工',
                    procedureid: '102-1',
                    procCode: 'WD-CNE-009'
                  }
                },
                {
                  id: '102-2',
                  text: '苍南项目部施工分部施工控制办公室组织机构与职责分工 <br /> WD-CNE-010',
                  data: {
                    name: '苍南项目部施工分部施工控制办公室组织机构与职责分工',
                    procedureid: '102-2',
                    procCode: 'WD-CNE-010'
                  }
                },
                {
                  id: '102-3',
                  text: '苍南项目部施工分部现场合同采购办公室组织机构与职责分工 <br /> WD-CNE-011',
                  data: {
                    name: '苍南项目部施工分部现场合同采购办公室组织机构与职责分工',
                    procedureid: '102-3',
                    procCode: 'WD-CNE-011'
                  }
                },
                {
                  id: '102-4',
                  text: '苍南项目部物资测量队组织机构与职责分工 <br /> WD-CNE-014',
                  data: {
                    name: '苍南项目部物资测量队组织机构与职责分工',
                    procedureid: '102-4',
                    procCode: 'WD-CNE-014'
                  }
                },
                {
                  id: '102-5',
                  text: '苍南项目部施工分部核岛安装队组织机构与职责分工 <br /> WD-CNE-016',
                  data: {
                    name: '苍南项目部施工分部核岛安装队组织机构与职责分工',
                    procedureid: '102-5',
                    procCode: 'WD-CNE-016'
                  }
                },
                {
                  id: '102-6',
                  text: '苍南项目部电仪安装队组织机构与职责分工 <br /> WD-CNE-017',
                  data: {
                    name: '苍南项目部电仪安装队组织机构与职责分工',
                    procedureid: '102-6',
                    procCode: 'WD-CNE-017'
                  }
                },
                {
                  id: '102-7',
                  text: '苍南项目部常规岛及BOP安装队组织机构与职责分工 <br /> WD-CNE-018',
                  data: {
                    name: '苍南项目部常规岛及BOP安装队组织机构与职责分工',
                    procedureid: '102-7',
                    procCode: 'WD-CNE-018'
                  }
                },
                {
                  id: '102-8',
                  text: '苍南项目部金属质量控制队组织机构与职责分工 <br /> WD-CNE-020',
                  data: {
                    name: '苍南项目部金属质量控制队组织机构与职责分工',
                    procedureid: '102-8',
                    procCode: 'WD-CNE-020'
                  }
                },
                {
                  id: '102-9',
                  text: '苍南项目部常规岛及BOP调试队组织机构与职责分工 <br /> WD-CNE-024',
                  data: {
                    name: '苍南项目部常规岛及BOP调试队组织机构与职责分工',
                    procedureid: '102-9',
                    procCode: 'WD-CNE-024'
                  }
                }
              ]
            }
          },
          {
            id: '103',
            text: '苍南项目部调试分部组织与运作规则 <br /> WD-CNE-021',
            data: {
              name: '苍南项目部调试分部组织与运作规则',
              procedureid: '103',
              procCode: 'WD-CNE-021',
              downstreamData: [
                {
                  id: '103-0',
                  text: '苍南项目部技术管理队组织机构与职责分工 <br /> WD-CNE-023',
                  data: {
                    name: '苍南项目部技术管理队组织机构与职责分工',
                    procedureid: '102-0',
                    procCode: 'WD-CNE-023'
                  }
                },
                {
                  id: '103-1',
                  text: '苍南项目部电气调试队组织机构与职责分工 <br /> WD-CNE-025',
                  data: {
                    name: '苍南项目部电气调试队组织机构与职责分工',
                    procedureid: '102-1',
                    procCode: 'WD-CNE-025'
                  }
                },
                {
                  id: '103-2',
                  text: '苍南项目部仪控调试队组织机构与职责分工 <br /> WD-CNE-026',
                  data: {
                    name: '苍南项目部仪控调试队组织机构与职责分工',
                    procedureid: '102-2',
                    procCode: 'WD-CNE-026'
                  }
                },
                {
                  id: '103-3',
                  text: '苍南项目部核岛调试队组织机构与职责分工 <br /> WD-CNE-027',
                  data: {
                    name: '苍南项目部核岛调试队组织机构与职责分工',
                    procedureid: '102-3',
                    procCode: 'WD-CNE-027'
                  }
                },
                {
                  id: '103-4',
                  text: '苍南项目部调试分部质控组组织机构与职责分工 <br /> WD-CNE-028',
                  data: {
                    name: '苍南项目部调试分部质控组组织机构与职责分工',
                    procedureid: '102-4',
                    procCode: 'WD-CNE-028'
                  }
                }
              ]
            }
          },
          {
            id: '104',
            text: '苍南项目部项目管理分部组织机构与职责 <br /> WD-CNE-005',
            data: {
              name: '苍南项目部项目管理分部组织机构与职责',
              procedureid: '104',
              procCode: 'WD-CNE-005',
              downstreamData: [
                {
                  id: '104-0',
                  text: 'WD-CNE-008 <br /> 苍南项目部项目管理分部工程计划队组织机构与职责分工',
                  data: {
                    name: '苍南项目部项目管理分部工程计划队组织机构与职责分工',
                    procedureid: '104-0',
                    procCode: 'WD-CNE-013'
                  }
                }
              ]
            }
          },
          {
            id: '105',
            text: '苍南项目部安全质量环保分部组织机构与职责分工 <br /> WD-CNE-002',
            data: {
              name: '苍南项目部安全质量环保分部组织机构与职责分工',
              procedureid: '105',
              procCode: 'WD-CNE-002'
            }
          },
          {
            id: '106',
            text: '苍南项目部数字化业务办公室组织与运作规则 <br /> WD-CNE-015',
            data: {
              name: '苍南项目部数字化业务办公室组织与运作规则',
              procedureid: '106',
              procCode: 'WD-CNE-015'
            }
          },
          {
            id: '107',
            text: '苍南项目部核岛土建施工图母本维护联合队组织与运作规则 <br /> BJ-30C-001-R',
            data: {
              name: '苍南项目部核岛土建施工图母本维护联合队组织与运作规则',
              procedureid: '107',
              procCode: 'BJ-30C-001-R'
            }
          }
        ],
        message: 'success'
      })
    }, 500)
  })
}

export const getRelatedData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: [
          {
            id: '200',
            text: '苍南项目部环境管理责任制 <br /> BJ-30M-102',
            data: {
              name: '苍南项目部环境管理责任制',
              procedureid: '200',
              procCode: 'BJ-30M-102'
            }
          },
          {
            id: '201',
            text: '苍南项目部安全生产责任制 <br /> BJ-30Q-004',
            data: {
              name: '苍南项目部安全生产责任制',
              procedureid: '201',
              procCode: 'BJ-30Q-004'
            }
          },
          {
            id: '202',
            text: '苍南项目部质量责任制 <br /> BJ-30M-101',
            data: {
              name: '苍南项目部质量责任制',
              procedureid: '202',
              procCode: 'BJ-30M-101'
            }
          }
        ],
        message: 'success'
      })
    }, 500)
  })
}
