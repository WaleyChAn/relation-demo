export const getUpstreamData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        // 注意：在节点配置信息中，你的自定义属性需要像下面这样放到data标签中，否则数据会丢失
        data: [
          {
            id: 'af0ebf93-7623-4940-a8bf-9cc897bf37a80',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8',
              procCode: 'MP-326-014'
            }
          },
          {
            id: '7abca03e-f1a5-4930-8c64-fd336fbff34d',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34d',
              procCode: 'MP-326-018'
            }
          },
          {
            id: '55ca3799-33a5-422e-9585-b819ff11c7e5',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureId: '55ca3799-33a5-422e-9585-b819ff11c7e5',
              procCode: 'MP-326-020'
            }
          },
          {
            id: '420db851-fc11-4431-b743-ee5926bbb75a',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureId: '420db851-fc11-4431-b743-ee5926bbb75a',
              procCode: 'MP-426-002'
            }
          },
          {
            id: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureId: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
              procCode: 'MP-426-009'
            }
          },
          {
            id: '2c7df436-1a03-4e5e-bad9-21fda3774c99',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureId: '2c7df436-1a03-4e5e-bad9-21fda3774c99',
              procCode: 'MP-426-011'
            }
          },
          {
            id: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8b',
              procCode: 'MP-326-014'
            }
          },
          {
            id: '7abca03e-f1a5-4930-8c64-fd336fbff34db',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34db',
              procCode: 'MP-326-018'
            }
          },
          {
            id: '55ca3799-33a5-422e-9585-b819ff11c7e5b',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureId: '55ca3799-33a5-422e-9585-b819ff11c7e5b',
              procCode: 'MP-326-020'
            }
          },
          {
            id: '420db851-fc11-4431-b743-ee5926bbb75ab',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureId: '420db851-fc11-4431-b743-ee5926bbb75ab',
              procCode: 'MP-426-002'
            }
          },
          {
            id: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3b',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureId: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3b',
              procCode: 'MP-426-009'
            }
          },
          {
            id: '2c7df436-1a03-4e5e-bad9-21fda3774c99b',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureId: '2c7df436-1a03-4e5e-bad9-21fda3774c99b',
              procCode: 'MP-426-011'
            }
          },
          {
            id: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8c',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8c',
              procCode: 'MP-326-014'
            }
          },
          {
            id: '7abca03e-f1a5-4930-8c64-fd336fbff34dc',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34dc',
              procCode: 'MP-326-018'
            }
          },
          {
            id: '55ca3799-33a5-422e-9585-b819ff11c7e5c',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureId: '55ca3799-33a5-422e-9585-b819ff11c7e5c',
              procCode: 'MP-326-020'
            }
          },
          {
            id: '420db851-fc11-4431-b743-ee5926bbb75ac',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureId: '420db851-fc11-4431-b743-ee5926bbb75ac',
              procCode: 'MP-426-002'
            }
          },
          {
            id: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3c',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureId: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3c',
              procCode: 'MP-426-009'
            }
          },
          {
            id: '2c7df436-1a03-4e5e-bad9-21fda3774c99c',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureId: '2c7df436-1a03-4e5e-bad9-21fda3774c99c',
              procCode: 'MP-426-011'
            }
          },
          {
            id: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8d',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8d',
              procCode: 'MP-326-014'
            }
          },
          {
            id: '7abca03e-f1a5-4930-8c64-fd336fbff34dd',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34dd',
              procCode: 'MP-326-018'
            }
          },
          {
            id: '55ca3799-33a5-422e-9585-b819ff11c7e5d',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureId: '55ca3799-33a5-422e-9585-b819ff11c7e5d',
              procCode: 'MP-326-020'
            }
          },
          {
            id: '420db851-fc11-4431-b743-ee5926bbb75ad',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureId: '420db851-fc11-4431-b743-ee5926bbb75ad',
              procCode: 'MP-426-002'
            }
          },
          {
            id: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3d',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureId: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3d',
              procCode: 'MP-426-009'
            }
          },
          {
            id: '2c7df436-1a03-4e5e-bad9-21fda3774c99d',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureId: '2c7df436-1a03-4e5e-bad9-21fda3774c99d',
              procCode: 'MP-426-011'
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
            id: 'baf0ebf93-7623-4940-a8bf-9cc897bf37a80',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8',
              procCode: 'MP-326-014'
            }
          },
          {
            id: 'b7abca03e-f1a5-4930-8c64-fd336fbff34d',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34d',
              procCode: 'MP-326-018'
            }
          },
          {
            id: 'b55ca3799-33a5-422e-9585-b819ff11c7e5',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureId: '55ca3799-33a5-422e-9585-b819ff11c7e5',
              procCode: 'MP-326-020'
            }
          },
          {
            id: 'b420db851-fc11-4431-b743-ee5926bbb75a',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureId: '420db851-fc11-4431-b743-ee5926bbb75a',
              procCode: 'MP-426-002'
            }
          },
          {
            id: 'b6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureId: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
              procCode: 'MP-426-009'
            }
          },
          {
            id: 'b2c7df436-1a03-4e5e-bad9-21fda3774c99',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureId: '2c7df436-1a03-4e5e-bad9-21fda3774c99',
              procCode: 'MP-426-011'
            }
          },
          {
            id: 'baf0ebf93-7623-4940-a8bf-9cc897bf37a8',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8b',
              procCode: 'MP-326-014'
            }
          },
          {
            id: 'b7abca03e-f1a5-4930-8c64-fd336fbff34db',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34db',
              procCode: 'MP-326-018'
            }
          },
          {
            id: 'b55ca3799-33a5-422e-9585-b819ff11c7e5b',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureId: '55ca3799-33a5-422e-9585-b819ff11c7e5b',
              procCode: 'MP-326-020'
            }
          },
          {
            id: 'b420db851-fc11-4431-b743-ee5926bbb75ab',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureId: '420db851-fc11-4431-b743-ee5926bbb75ab',
              procCode: 'MP-426-002'
            }
          },
          {
            id: 'b6ec9a314-5b21-4c93-953d-bdaf33d84dc3b',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureId: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3b',
              procCode: 'MP-426-009'
            }
          },
          {
            id: 'b2c7df436-1a03-4e5e-bad9-21fda3774c99b',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureId: '2c7df436-1a03-4e5e-bad9-21fda3774c99b',
              procCode: 'MP-426-011'
            }
          },
          {
            id: 'baf0ebf93-7623-4940-a8bf-9cc897bf37a8c',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8c',
              procCode: 'MP-326-014'
            }
          },
          {
            id: 'b7abca03e-f1a5-4930-8c64-fd336fbff34dc',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34dc',
              procCode: 'MP-326-018'
            }
          },
          {
            id: 'b55ca3799-33a5-422e-9585-b819ff11c7e5c',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureId: '55ca3799-33a5-422e-9585-b819ff11c7e5c',
              procCode: 'MP-326-020'
            }
          },
          {
            id: 'b420db851-fc11-4431-b743-ee5926bbb75ac',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureId: '420db851-fc11-4431-b743-ee5926bbb75ac',
              procCode: 'MP-426-002'
            }
          },
          {
            id: 'b6ec9a314-5b21-4c93-953d-bdaf33d84dc3c',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureId: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3c',
              procCode: 'MP-426-009'
            }
          },
          {
            id: 'b2c7df436-1a03-4e5e-bad9-21fda3774c99c',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureId: '2c7df436-1a03-4e5e-bad9-21fda3774c99c',
              procCode: 'MP-426-011'
            }
          },
          {
            id: 'baf0ebf93-7623-4940-a8bf-9cc897bf37a8d',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8d',
              procCode: 'MP-326-014'
            }
          },
          {
            id: 'b7abca03e-f1a5-4930-8c64-fd336fbff34dd',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34dd',
              procCode: 'MP-326-018'
            }
          },
          {
            id: 'b55ca3799-33a5-422e-9585-b819ff11c7e5d',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureId: '55ca3799-33a5-422e-9585-b819ff11c7e5d',
              procCode: 'MP-326-020'
            }
          },
          {
            id: 'b420db851-fc11-4431-b743-ee5926bbb75ad',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureId: '420db851-fc11-4431-b743-ee5926bbb75ad',
              procCode: 'MP-426-002'
            }
          },
          {
            id: 'b6ec9a314-5b21-4c93-953d-bdaf33d84dc3d',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureId: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3d',
              procCode: 'MP-426-009'
            }
          },
          {
            id: 'b2c7df436-1a03-4e5e-bad9-21fda3774c99d',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureId: '2c7df436-1a03-4e5e-bad9-21fda3774c99d',
              procCode: 'MP-426-011'
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
            id: 'caf0ebf93-7623-4940-a8bf-9cc897bf37a80',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8',
              procCode: 'MP-326-014'
            }
          },
          {
            id: 'c7abca03e-f1a5-4930-8c64-fd336fbff34d',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34d',
              procCode: 'MP-326-018'
            }
          },
          {
            id: 'c55ca3799-33a5-422e-9585-b819ff11c7e5',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureId: '55ca3799-33a5-422e-9585-b819ff11c7e5',
              procCode: 'MP-326-020'
            }
          },
          {
            id: 'c420db851-fc11-4431-b743-ee5926bbb75a',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureId: '420db851-fc11-4431-b743-ee5926bbb75a',
              procCode: 'MP-426-002'
            }
          },
          {
            id: 'c6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureId: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
              procCode: 'MP-426-009'
            }
          },
          {
            id: 'c2c7df436-1a03-4e5e-bad9-21fda3774c99',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureId: '2c7df436-1a03-4e5e-bad9-21fda3774c99',
              procCode: 'MP-426-011'
            }
          },
          {
            id: 'caf0ebf93-7623-4940-a8bf-9cc897bf37a8',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8b',
              procCode: 'MP-326-014'
            }
          },
          {
            id: 'c7abca03e-f1a5-4930-8c64-fd336fbff34db',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34db',
              procCode: 'MP-326-018'
            }
          },
          {
            id: 'c55ca3799-33a5-422e-9585-b819ff11c7e5b',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureId: '55ca3799-33a5-422e-9585-b819ff11c7e5b',
              procCode: 'MP-326-020'
            }
          },
          {
            id: 'c420db851-fc11-4431-b743-ee5926bbb75ab',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureId: '420db851-fc11-4431-b743-ee5926bbb75ab',
              procCode: 'MP-426-002'
            }
          },
          {
            id: 'c6ec9a314-5b21-4c93-953d-bdaf33d84dc3b',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureId: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3b',
              procCode: 'MP-426-009'
            }
          },
          {
            id: 'c2c7df436-1a03-4e5e-bad9-21fda3774c99b',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureId: '2c7df436-1a03-4e5e-bad9-21fda3774c99b',
              procCode: 'MP-426-011'
            }
          },
          {
            id: 'caf0ebf93-7623-4940-a8bf-9cc897bf37a8c',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8c',
              procCode: 'MP-326-014'
            }
          },
          {
            id: 'c7abca03e-f1a5-4930-8c64-fd336fbff34dc',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34dc',
              procCode: 'MP-326-018'
            }
          },
          {
            id: 'c55ca3799-33a5-422e-9585-b819ff11c7e5c',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureId: '55ca3799-33a5-422e-9585-b819ff11c7e5c',
              procCode: 'MP-326-020'
            }
          },
          {
            id: 'c420db851-fc11-4431-b743-ee5926bbb75ac',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureId: '420db851-fc11-4431-b743-ee5926bbb75ac',
              procCode: 'MP-426-002'
            }
          },
          {
            id: 'c6ec9a314-5b21-4c93-953d-bdaf33d84dc3c',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureId: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3c',
              procCode: 'MP-426-009'
            }
          },
          {
            id: 'c2c7df436-1a03-4e5e-bad9-21fda3774c99c',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureId: '2c7df436-1a03-4e5e-bad9-21fda3774c99c',
              procCode: 'MP-426-011'
            }
          },
          {
            id: 'caf0ebf93-7623-4940-a8bf-9cc897bf37a8d',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8d',
              procCode: 'MP-326-014'
            }
          },
          {
            id: 'c7abca03e-f1a5-4930-8c64-fd336fbff34dd',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34dd',
              procCode: 'MP-326-018'
            }
          },
          {
            id: 'c55ca3799-33a5-422e-9585-b819ff11c7e5d',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureId: '55ca3799-33a5-422e-9585-b819ff11c7e5d',
              procCode: 'MP-326-020'
            }
          },
          {
            id: 'c420db851-fc11-4431-b743-ee5926bbb75ad',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureId: '420db851-fc11-4431-b743-ee5926bbb75ad',
              procCode: 'MP-426-002'
            }
          },
          {
            id: 'c6ec9a314-5b21-4c93-953d-bdaf33d84dc3d',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureId: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3d',
              procCode: 'MP-426-009'
            }
          },
          {
            id: 'c2c7df436-1a03-4e5e-bad9-21fda3774c99d',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureId: '2c7df436-1a03-4e5e-bad9-21fda3774c99d',
              procCode: 'MP-426-011'
            }
          }
        ],
        message: 'success'
      })
    }, 500)
  })
}
