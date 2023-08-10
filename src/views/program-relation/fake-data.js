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
              procCode: 'MP-326-014',
              upstreamData: [
                {
                  id: 'aaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'aaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'a7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'a7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'a55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'a55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'a420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'a420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'a6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'a6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'a2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'a2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'aaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'aaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'a7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'a7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'a55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'a55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'a420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'a420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '7abca03e-f1a5-4930-8c64-fd336fbff34d',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34d',
              procCode: 'MP-326-018',
              upstreamData: [
                {
                  id: 'baf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'baf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'b7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'b7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'b55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'b55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'b420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'b420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'b6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'b6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'b2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'b2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'baf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'baf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'b7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'b7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'b55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'b55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'b420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'b420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '55ca3799-33a5-422e-9585-b819ff11c7e5',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureId: '55ca3799-33a5-422e-9585-b819ff11c7e5',
              procCode: 'MP-326-020',
              upstreamData: [
                {
                  id: 'caf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'caf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'c7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'c7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'c55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'c55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'c420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'c420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'c6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'c6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'c2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'c2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'caf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'caf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'c7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'c7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'c55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'c55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'c420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'c420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '420db851-fc11-4431-b743-ee5926bbb75a',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureId: '420db851-fc11-4431-b743-ee5926bbb75a',
              procCode: 'MP-426-002',
              upstreamData: [
                {
                  id: 'daf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'daf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'd7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'd7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'd55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'd55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'd420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'd420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'd6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'd6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'd2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'd2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'daf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'daf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'd7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'd7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'd55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'd55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'd420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'd420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureId: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
              procCode: 'MP-426-009',
              upstreamData: [
                {
                  id: 'eaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'eaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'e7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'e7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'e55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'e55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'e420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'e420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'e6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'e6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'e2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'e2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'eaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'eaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'e7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'e7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'e55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'e55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'e420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'e420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '2c7df436-1a03-4e5e-bad9-21fda3774c99',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureId: '2c7df436-1a03-4e5e-bad9-21fda3774c99',
              procCode: 'MP-426-011',
              upstreamData: [
                {
                  id: 'faf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'faf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'f7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'f7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'f55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'f55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'f420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'f420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'f6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'f6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'f2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'f2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'faf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'faf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'f7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'f7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'f55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'f55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'f420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'f420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8b',
              procCode: 'MP-326-014',
              upstreamData: [
                {
                  id: 'gaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'gaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'g7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'g7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'g55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'g55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'g420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'g420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'g6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'g6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'g2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'g2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'gaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'gaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'g7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'g7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'g55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'g55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'g420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'g420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '7abca03e-f1a5-4930-8c64-fd336fbff34db',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34db',
              procCode: 'MP-326-018',
              upstreamData: [
                {
                  id: 'haf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'haf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'h7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'h7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'h55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'h55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'h420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'h420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'h6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'h6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'h2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'h2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'haf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'haf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'h7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'h7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'h55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'h55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'h420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'h420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '55ca3799-33a5-422e-9585-b819ff11c7e5b',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureId: '55ca3799-33a5-422e-9585-b819ff11c7e5b',
              procCode: 'MP-326-020',
              upstreamData: [
                {
                  id: 'iaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'iaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'i7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'i7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'i55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'i55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'i420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'i420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'i6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'i6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'i2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'i2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'iaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'iaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'i7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'i7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'i55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'i55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'i420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'i420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '420db851-fc11-4431-b743-ee5926bbb75ab',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureId: '420db851-fc11-4431-b743-ee5926bbb75ab',
              procCode: 'MP-426-002',
              upstreamData: [
                {
                  id: 'jaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'jaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'j7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'j7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'j55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'j55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'j420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'j420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'j6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'j6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'j2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'j2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'jaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'jaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'j7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'j7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'j55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'j55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'j420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'j420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3b',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureId: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3b',
              procCode: 'MP-426-009',
              upstreamData: [
                {
                  id: 'kaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'kaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'k7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'k7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'k55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'k55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'k420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'k420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'k6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'k6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'k2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'k2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'kaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'kaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'k7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'k7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'k55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'k55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'k420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'k420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '2c7df436-1a03-4e5e-bad9-21fda3774c99b',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureId: '2c7df436-1a03-4e5e-bad9-21fda3774c99b',
              procCode: 'MP-426-011',
              upstreamData: [
                {
                  id: 'laf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'laf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'l7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'l7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'l55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'l55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'l420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'l420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'l6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'l6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'l2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'l2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'laf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'laf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'l7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'l7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'l55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'l55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'l420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'l420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8c',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8c',
              procCode: 'MP-326-014',
              upstreamData: [
                {
                  id: 'maf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'maf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'm7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'm7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'm55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'm55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'm420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'm420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'm6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'm6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'm2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'm2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'maf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'maf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'm7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'm7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'm55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'm55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'm420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'm420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '7abca03e-f1a5-4930-8c64-fd336fbff34dc',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34dc',
              procCode: 'MP-326-018',
              upstreamData: [
                {
                  id: 'naf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'naf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'n7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'n7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'n55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'n55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'n420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'n420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'n6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'n6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'n2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'n2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'naf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'naf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'n7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'n7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'n55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'n55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'n420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'n420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '55ca3799-33a5-422e-9585-b819ff11c7e5c',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureId: '55ca3799-33a5-422e-9585-b819ff11c7e5c',
              procCode: 'MP-326-020',
              upstreamData: [
                {
                  id: 'oaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'oaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'o7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'o7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'o55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'o55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'o420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'o420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'o6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'o6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'o2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'o2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'oaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'oaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'o7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'o7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'o55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'o55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'o420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'o420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '420db851-fc11-4431-b743-ee5926bbb75ac',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureId: '420db851-fc11-4431-b743-ee5926bbb75ac',
              procCode: 'MP-426-002',
              upstreamData: [
                {
                  id: 'paf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'paf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'p7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'p7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'p55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'p55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'p420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'p420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'p6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'p6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'p2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'p2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'paf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'paf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'p7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'p7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'p55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'p55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'p420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'p420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3c',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureId: '6ec9a314-5b21-4c93-953d-bdaf33d84dc3c',
              procCode: 'MP-426-009',
              upstreamData: [
                {
                  id: 'qaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'qaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'q7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'q7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'q55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'q55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'q420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'q420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'q6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'q6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'q2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'q2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'qaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'qaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'q7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'q7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'q55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'q55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'q420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'q420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '2c7df436-1a03-4e5e-bad9-21fda3774c99c',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureId: '2c7df436-1a03-4e5e-bad9-21fda3774c99c',
              procCode: 'MP-426-011',
              upstreamData: [
                {
                  id: 'raf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'raf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'r7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'r7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'r55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'r55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'r420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'r420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'r6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'r6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'r2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'r2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'raf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'raf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'r7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'r7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'r55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'r55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'r420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'r420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8d',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureId: 'af0ebf93-7623-4940-a8bf-9cc897bf37a8d',
              procCode: 'MP-326-014',
              upstreamData: [
                {
                  id: 'taf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'taf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 't7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 't7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 't55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 't55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 't420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 't420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 't6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 't6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 't2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 't2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'taf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'taf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 't7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 't7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 't55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 't55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 't420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 't420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: '7abca03e-f1a5-4930-8c64-fd336fbff34dd',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureId: '7abca03e-f1a5-4930-8c64-fd336fbff34dd',
              procCode: 'MP-326-018',
              upstreamData: [
                {
                  id: 'uaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'uaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'u7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'u7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'u55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'u55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'u420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'u420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'u6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureId: 'u6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'u2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureId: 'u2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'uaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureId: 'uaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'u7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureId: 'u7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'u55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureId: 'u55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'u420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureId: 'u420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
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
            id: 'Baf0ebf93-7623-4940-a8bf-9cc897bf37a80',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureid: 'Baf0ebf93-7623-4940-a8bf-9cc897bf37a8',
              procCode: 'MP-326-014',
              downstreamData: [
                {
                  id: 'Baaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Baaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Ba7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Ba7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Ba55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Ba55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Ba420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Ba420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Ba6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Ba6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Ba2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Ba2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Baaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Baaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Ba7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Ba7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Ba55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Ba55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Ba420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Ba420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B7abca03e-f1a5-4930-8c64-fd336fbff34d',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureid: 'B7abca03e-f1a5-4930-8c64-fd336fbff34d',
              procCode: 'MP-326-018',
              downstreamData: [
                {
                  id: 'Bbaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bbaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bb7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bb7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bb55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bb55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bb420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bb420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bb6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bb6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bb2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bb2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Bbaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bbaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bb7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bb7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bb55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bb55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bb420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bb420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B55ca3799-33a5-422e-9585-b819ff11c7e5',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureid: 'B55ca3799-33a5-422e-9585-b819ff11c7e5',
              procCode: 'MP-326-020',
              downstreamData: [
                {
                  id: 'Bcaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bcaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bc7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bc7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bc55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bc55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bc420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bc420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bc6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bc6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bc2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bc2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Bcaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bcaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bc7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bc7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bc55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bc55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bc420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bc420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B420db851-fc11-4431-b743-ee5926bbb75a',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureid: 'B420db851-fc11-4431-b743-ee5926bbb75a',
              procCode: 'MP-426-002',
              downstreamData: [
                {
                  id: 'Bdaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bdaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bd7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bd7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bd55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bd55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bd420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bd420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bd6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bd6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bd2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bd2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Bdaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bdaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bd7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bd7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bd55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bd55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bd420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bd420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureid: 'B6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
              procCode: 'MP-426-009',
              downstreamData: [
                {
                  id: 'Beaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Beaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Be7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Be7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Be55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Be55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Be420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Be420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Be6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Be6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Be2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Be2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Beaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Beaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Be7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Be7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Be55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Be55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Be420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Be420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B2c7df436-1a03-4e5e-bad9-21fda3774c99',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureid: 'B2c7df436-1a03-4e5e-bad9-21fda3774c99',
              procCode: 'MP-426-011',
              downstreamData: [
                {
                  id: 'Bfaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bfaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bf7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bf7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bf55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bf55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bf420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bf420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bf6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bf6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bf2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bf2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Bfaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bfaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bf7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bf7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bf55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bf55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bf420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bf420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'Baf0ebf93-7623-4940-a8bf-9cc897bf37a8',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureid: 'Baf0ebf93-7623-4940-a8bf-9cc897bf37a8b',
              procCode: 'MP-326-014',
              downstreamData: [
                {
                  id: 'Bgaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bgaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bg7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bg7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bg55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bg55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bg420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bg420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bg6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bg6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bg2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bg2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Bgaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bgaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bg7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bg7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bg55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bg55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bg420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bg420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B7abca03e-f1a5-4930-8c64-fd336fbff34db',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureid: 'B7abca03e-f1a5-4930-8c64-fd336fbff34db',
              procCode: 'MP-326-018',
              downstreamData: [
                {
                  id: 'Bhaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bhaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bh7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bh7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bh55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bh55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bh420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bh420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bh6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bh6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bh2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bh2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Bhaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bhaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bh7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bh7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bh55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bh55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bh420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bh420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B55ca3799-33a5-422e-9585-b819ff11c7e5b',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureid: 'B55ca3799-33a5-422e-9585-b819ff11c7e5b',
              procCode: 'MP-326-020',
              downstreamData: [
                {
                  id: 'Biaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Biaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bi7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bi7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bi55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bi55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bi420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bi420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bi6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bi6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bi2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bi2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Biaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Biaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bi7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bi7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bi55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bi55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bi420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bi420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B420db851-fc11-4431-b743-ee5926bbb75ab',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureid: 'B420db851-fc11-4431-b743-ee5926bbb75ab',
              procCode: 'MP-426-002',
              downstreamData: [
                {
                  id: 'Bjaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bjaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bj7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bj7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bj55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bj55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bj420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bj420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bj6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bj6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bj2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bj2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Bjaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bjaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bj7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bj7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bj55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bj55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bj420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bj420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B6ec9a314-5b21-4c93-953d-bdaf33d84dc3b',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureid: 'B6ec9a314-5b21-4c93-953d-bdaf33d84dc3b',
              procCode: 'MP-426-009',
              downstreamData: [
                {
                  id: 'Bkaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bkaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bk7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bk7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bk55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bk55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bk420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bk420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bk6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bk6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bk2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bk2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Bkaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bkaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bk7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bk7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bk55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bk55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bk420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bk420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B2c7df436-1a03-4e5e-bad9-21fda3774c99b',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureid: 'B2c7df436-1a03-4e5e-bad9-21fda3774c99b',
              procCode: 'MP-426-011',
              downstreamData: [
                {
                  id: 'Blaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Blaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bl7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bl7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bl55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bl55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bl420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bl420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bl6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bl6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bl2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bl2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Blaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Blaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bl7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bl7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bl55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bl55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bl420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bl420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'Baf0ebf93-7623-4940-a8bf-9cc897bf37a8c',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureid: 'Baf0ebf93-7623-4940-a8bf-9cc897bf37a8c',
              procCode: 'MP-326-014',
              downstreamData: [
                {
                  id: 'Bmaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bmaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bm7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bm7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bm55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bm55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bm420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bm420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bm6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bm6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bm2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bm2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Bmaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bmaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bm7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bm7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bm55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bm55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bm420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bm420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B7abca03e-f1a5-4930-8c64-fd336fbff34dc',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureid: 'B7abca03e-f1a5-4930-8c64-fd336fbff34dc',
              procCode: 'MP-326-018',
              downstreamData: [
                {
                  id: 'Bnaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bnaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bn7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bn7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bn55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bn55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bn420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bn420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bn6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bn6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bn2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bn2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Bnaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bnaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bn7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bn7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bn55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bn55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bn420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bn420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B55ca3799-33a5-422e-9585-b819ff11c7e5c',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureid: 'B55ca3799-33a5-422e-9585-b819ff11c7e5c',
              procCode: 'MP-326-020',
              downstreamData: [
                {
                  id: 'Boaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Boaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bo7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bo7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bo55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bo55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bo420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bo420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bo6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bo6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bo2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bo2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Boaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Boaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bo7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bo7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bo55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bo55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bo420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bo420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B420db851-fc11-4431-b743-ee5926bbb75ac',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureid: 'B420db851-fc11-4431-b743-ee5926bbb75ac',
              procCode: 'MP-426-002',
              downstreamData: [
                {
                  id: 'Bpaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bpaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bp7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bp7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bp55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bp55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bp420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bp420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bp6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bp6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bp2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bp2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Bpaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bpaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bp7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bp7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bp55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bp55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bp420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bp420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B6ec9a314-5b21-4c93-953d-bdaf33d84dc3c',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureid: 'B6ec9a314-5b21-4c93-953d-bdaf33d84dc3c',
              procCode: 'MP-426-009',
              downstreamData: [
                {
                  id: 'Bqaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bqaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bq7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bq7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bq55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bq55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bq420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bq420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bq6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bq6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bq2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bq2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Bqaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Bqaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bq7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bq7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bq55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bq55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bq420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bq420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B2c7df436-1a03-4e5e-bad9-21fda3774c99c',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureid: 'B2c7df436-1a03-4e5e-bad9-21fda3774c99c',
              procCode: 'MP-426-011',
              downstreamData: [
                {
                  id: 'Braf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Braf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Br7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Br7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Br55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Br55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Br420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Br420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Br6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Br6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Br2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Br2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Braf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Braf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Br7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Br7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Br55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Br55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Br420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Br420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'Baf0ebf93-7623-4940-a8bf-9cc897bf37a8d',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureid: 'Baf0ebf93-7623-4940-a8bf-9cc897bf37a8d',
              procCode: 'MP-326-014',
              downstreamData: [
                {
                  id: 'Btaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Btaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bt7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bt7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bt55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bt55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bt420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bt420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bt6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bt6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bt2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bt2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Btaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Btaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bt7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bt7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bt55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bt55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bt420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bt420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B7abca03e-f1a5-4930-8c64-fd336fbff34dd',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureid: 'B7abca03e-f1a5-4930-8c64-fd336fbff34dd',
              procCode: 'MP-326-018',
              downstreamData: [
                {
                  id: 'Buaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Buaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bu7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bu7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bu55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bu55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bu420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bu420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Bu6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Bu6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Bu2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Bu2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Buaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Buaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Bu7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Bu7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Bu55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Bu55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Bu420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Bu420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'B55ca3799-33a5-422e-9585-b819ff11c7e5d',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureid: 'B55ca3799-33a5-422e-9585-b819ff11c7e5d',
              procCode: 'MP-326-020'
            }
          },
          {
            id: 'B420db851-fc11-4431-b743-ee5926bbb75ad',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureid: 'B420db851-fc11-4431-b743-ee5926bbb75ad',
              procCode: 'MP-426-002'
            }
          },
          {
            id: 'B6ec9a314-5b21-4c93-953d-bdaf33d84dc3d',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureid: 'B6ec9a314-5b21-4c93-953d-bdaf33d84dc3d',
              procCode: 'MP-426-009'
            }
          },
          {
            id: 'B2c7df436-1a03-4e5e-bad9-21fda3774c99d',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureid: 'B2c7df436-1a03-4e5e-bad9-21fda3774c99d',
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
            id: 'Caf0ebf93-7623-4940-a8bf-9cc897bf37a80',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureid: 'Caf0ebf93-7623-4940-a8bf-9cc897bf37a8',
              procCode: 'MP-326-014',
              relatedData: [
                {
                  id: 'Caaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Caaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Ca7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Ca7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Ca55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Ca55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Ca420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Ca420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Ca6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Ca6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Ca2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Ca2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Caaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Caaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Ca7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Ca7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Ca55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Ca55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Ca420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Ca420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C7abca03e-f1a5-4930-8c64-fd336fbff34d',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureid: 'C7abca03e-f1a5-4930-8c64-fd336fbff34d',
              procCode: 'MP-326-018',
              relatedData: [
                {
                  id: 'Cbaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cbaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cb7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cb7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cb55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cb55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cb420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cb420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Cb6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Cb6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Cb2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Cb2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Cbaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cbaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cb7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cb7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cb55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cb55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cb420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cb420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C55ca3799-33a5-422e-9585-b819ff11c7e5',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureid: 'C55ca3799-33a5-422e-9585-b819ff11c7e5',
              procCode: 'MP-326-020',
              relatedData: [
                {
                  id: 'Ccaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Ccaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cc7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cc7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cc55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cc55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cc420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cc420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Cc6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Cc6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Cc2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Cc2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Ccaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Ccaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cc7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cc7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cc55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cc55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cc420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cc420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C420db851-fc11-4431-b743-ee5926bbb75a',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureid: 'C420db851-fc11-4431-b743-ee5926bbb75a',
              procCode: 'MP-426-002',
              relatedData: [
                {
                  id: 'Cdaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cdaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cd7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cd7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cd55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cd55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cd420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cd420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Cd6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Cd6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Cd2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Cd2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Cdaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cdaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cd7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cd7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cd55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cd55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cd420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cd420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureid: 'C6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
              procCode: 'MP-426-009',
              relatedData: [
                {
                  id: 'Ceaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Ceaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Ce7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Ce7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Ce55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Ce55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Ce420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Ce420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Ce6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Ce6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Ce2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Ce2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Ceaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Ceaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Ce7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Ce7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Ce55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Ce55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Ce420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Ce420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C2c7df436-1a03-4e5e-bad9-21fda3774c99',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureid: 'C2c7df436-1a03-4e5e-bad9-21fda3774c99',
              procCode: 'MP-426-011',
              relatedData: [
                {
                  id: 'Cfaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cfaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cf7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cf7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cf55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cf55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cf420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cf420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Cf6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Cf6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Cf2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Cf2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Cfaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cfaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cf7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cf7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cf55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cf55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cf420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cf420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'Caf0ebf93-7623-4940-a8bf-9cc897bf37a8',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureid: 'Caf0ebf93-7623-4940-a8bf-9cc897bf37a8b',
              procCode: 'MP-326-014',
              relatedData: [
                {
                  id: 'Cgaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cgaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cg7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cg7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cg55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cg55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cg420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cg420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Cg6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Cg6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Cg2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Cg2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Cgaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cgaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cg7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cg7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cg55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cg55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cg420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cg420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C7abca03e-f1a5-4930-8c64-fd336fbff34db',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureid: 'C7abca03e-f1a5-4930-8c64-fd336fbff34db',
              procCode: 'MP-326-018',
              relatedData: [
                {
                  id: 'Chaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Chaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Ch7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Ch7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Ch55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Ch55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Ch420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Ch420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Ch6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Ch6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Ch2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Ch2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Chaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Chaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Ch7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Ch7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Ch55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Ch55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Ch420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Ch420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C55ca3799-33a5-422e-9585-b819ff11c7e5b',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureid: 'C55ca3799-33a5-422e-9585-b819ff11c7e5b',
              procCode: 'MP-326-020',
              relatedData: [
                {
                  id: 'Ciaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Ciaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Ci7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Ci7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Ci55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Ci55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Ci420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Ci420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Ci6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Ci6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Ci2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Ci2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Ciaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Ciaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Ci7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Ci7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Ci55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Ci55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Ci420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Ci420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C420db851-fc11-4431-b743-ee5926bbb75ab',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureid: 'C420db851-fc11-4431-b743-ee5926bbb75ab',
              procCode: 'MP-426-002',
              relatedData: [
                {
                  id: 'Cjaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cjaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cj7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cj7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cj55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cj55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cj420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cj420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Cj6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Cj6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Cj2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Cj2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Cjaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cjaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cj7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cj7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cj55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cj55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cj420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cj420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C6ec9a314-5b21-4c93-953d-bdaf33d84dc3b',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureid: 'C6ec9a314-5b21-4c93-953d-bdaf33d84dc3b',
              procCode: 'MP-426-009',
              relatedData: [
                {
                  id: 'Ckaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Ckaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Ck7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Ck7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Ck55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Ck55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Ck420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Ck420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Ck6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Ck6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Ck2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Ck2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Ckaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Ckaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Ck7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Ck7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Ck55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Ck55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Ck420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Ck420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C2c7df436-1a03-4e5e-bad9-21fda3774c99b',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureid: 'C2c7df436-1a03-4e5e-bad9-21fda3774c99b',
              procCode: 'MP-426-011',
              relatedData: [
                {
                  id: 'Claf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Claf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cl7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cl7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cl55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cl55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cl420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cl420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Cl6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Cl6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Cl2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Cl2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Claf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Claf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cl7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cl7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cl55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cl55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cl420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cl420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'Caf0ebf93-7623-4940-a8bf-9cc897bf37a8c',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureid: 'Caf0ebf93-7623-4940-a8bf-9cc897bf37a8c',
              procCode: 'MP-326-014',
              relatedData: [
                {
                  id: 'Cmaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cmaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cm7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cm7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cm55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cm55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cm420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cm420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Cm6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Cm6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Cm2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Cm2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Cmaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cmaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cm7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cm7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cm55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cm55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cm420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cm420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C7abca03e-f1a5-4930-8c64-fd336fbff34dc',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureid: 'C7abca03e-f1a5-4930-8c64-fd336fbff34dc',
              procCode: 'MP-326-018',
              relatedData: [
                {
                  id: 'Cnaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cnaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cn7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cn7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cn55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cn55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cn420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cn420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Cn6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Cn6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Cn2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Cn2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Cnaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cnaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cn7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cn7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cn55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cn55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cn420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cn420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C55ca3799-33a5-422e-9585-b819ff11c7e5c',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureid: 'C55ca3799-33a5-422e-9585-b819ff11c7e5c',
              procCode: 'MP-326-020',
              relatedData: [
                {
                  id: 'Coaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Coaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Co7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Co7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Co55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Co55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Co420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Co420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Co6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Co6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Co2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Co2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Coaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Coaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Co7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Co7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Co55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Co55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Co420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Co420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C420db851-fc11-4431-b743-ee5926bbb75ac',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureid: 'C420db851-fc11-4431-b743-ee5926bbb75ac',
              procCode: 'MP-426-002',
              relatedData: [
                {
                  id: 'Cpaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cpaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cp7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cp7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cp55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cp55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cp420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cp420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Cp6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Cp6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Cp2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Cp2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Cpaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cpaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cp7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cp7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cp55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cp55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cp420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cp420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C6ec9a314-5b21-4c93-953d-bdaf33d84dc3c',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureid: 'C6ec9a314-5b21-4c93-953d-bdaf33d84dc3c',
              procCode: 'MP-426-009',
              relatedData: [
                {
                  id: 'Cqaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cqaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cq7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cq7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cq55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cq55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cq420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cq420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Cq6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Cq6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Cq2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Cq2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Cqaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cqaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cq7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cq7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cq55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cq55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cq420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cq420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C2c7df436-1a03-4e5e-bad9-21fda3774c99c',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureid: 'C2c7df436-1a03-4e5e-bad9-21fda3774c99c',
              procCode: 'MP-426-011',
              relatedData: [
                {
                  id: 'Craf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Craf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cr7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cr7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cr55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cr55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cr420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cr420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Cr6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Cr6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Cr2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Cr2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Craf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Craf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cr7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cr7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cr55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cr55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cr420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cr420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'Caf0ebf93-7623-4940-a8bf-9cc897bf37a8d',
            text: '基层分工会组织管理流程 <br /> MP-326-014',
            data: {
              name: '基层分工会组织管理流程',
              procedureid: 'Caf0ebf93-7623-4940-a8bf-9cc897bf37a8d',
              procCode: 'MP-326-014',
              relatedData: [
                {
                  id: 'Ctaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Ctaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Ct7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Ct7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Ct55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Ct55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Ct420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Ct420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Ct6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Ct6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Ct2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Ct2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Ctaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Ctaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Ct7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Ct7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Ct55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Ct55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Ct420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Ct420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C7abca03e-f1a5-4930-8c64-fd336fbff34dd',
            text: '公司文体公共设施管理办法 <br /> MP-326-018',
            data: {
              name: '公司文体公共设施管理办法',
              procedureid: 'C7abca03e-f1a5-4930-8c64-fd336fbff34dd',
              procCode: 'MP-326-018',
              relatedData: [
                {
                  id: 'Cuaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cuaf0ebf93-7623-4940-a8bf-9cc897bf37a80',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cu7abca03e-f1a5-4930-8c64-fd336fbff34d',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cu7abca03e-f1a5-4930-8c64-fd336fbff34d',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cu55ca3799-33a5-422e-9585-b819ff11c7e5',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cu55ca3799-33a5-422e-9585-b819ff11c7e5',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cu420db851-fc11-4431-b743-ee5926bbb75a',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cu420db851-fc11-4431-b743-ee5926bbb75a',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                },
                {
                  id: 'Cu6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                  data: {
                    name: '公司文体协会管理细则',
                    procedureid: 'Cu6ec9a314-5b21-4c93-953d-bdaf33d84dc3',
                    procCode: 'MP-426-009'
                  },
                  text: '公司文体协会管理细则 <br /> MP-426-009'
                },
                {
                  id: 'Cu2c7df436-1a03-4e5e-bad9-21fda3774c99',
                  data: {
                    name: '中广核工程有限公司职工技能竞赛管理办法',
                    procedureid: 'Cu2c7df436-1a03-4e5e-bad9-21fda3774c99',
                    procCode: 'MP-426-011'
                  },
                  text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011'
                },
                {
                  id: 'Cuaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                  data: {
                    name: '基层分工会组织管理流程',
                    procedureid: 'Cuaf0ebf93-7623-4940-a8bf-9cc897bf37a8',
                    procCode: 'MP-326-014'
                  },
                  text: '基层分工会组织管理流程 <br /> MP-326-014'
                },
                {
                  id: 'Cu7abca03e-f1a5-4930-8c64-fd336fbff34db',
                  data: {
                    name: '公司文体公共设施管理办法',
                    procedureid: 'Cu7abca03e-f1a5-4930-8c64-fd336fbff34db',
                    procCode: 'MP-326-018'
                  },
                  text: '公司文体公共设施管理办法 <br /> MP-326-018'
                },
                {
                  id: 'Cu55ca3799-33a5-422e-9585-b819ff11c7e5b',
                  data: {
                    name: '公司工会会员代表大会管理规定',
                    procedureid: 'Cu55ca3799-33a5-422e-9585-b819ff11c7e5b',
                    procCode: 'MP-326-020'
                  },
                  text: '公司工会会员代表大会管理规定 <br /> MP-326-020'
                },
                {
                  id: 'Cu420db851-fc11-4431-b743-ee5926bbb75ab',
                  data: {
                    name: '公司工会经费管理规定',
                    procedureid: 'Cu420db851-fc11-4431-b743-ee5926bbb75ab',
                    procCode: 'MP-426-002'
                  },
                  text: '公司工会经费管理规定 <br /> MP-426-002'
                }
              ]
            }
          },
          {
            id: 'C55ca3799-33a5-422e-9585-b819ff11c7e5d',
            text: '公司工会会员代表大会管理规定 <br /> MP-326-020',
            data: {
              name: '公司工会会员代表大会管理规定',
              procedureid: 'C55ca3799-33a5-422e-9585-b819ff11c7e5d',
              procCode: 'MP-326-020'
            }
          },
          {
            id: 'C420db851-fc11-4431-b743-ee5926bbb75ad',
            text: '公司工会经费管理规定 <br /> MP-426-002',
            data: {
              name: '公司工会经费管理规定',
              procedureid: 'C420db851-fc11-4431-b743-ee5926bbb75ad',
              procCode: 'MP-426-002'
            }
          },
          {
            id: 'C6ec9a314-5b21-4c93-953d-bdaf33d84dc3d',
            text: '公司文体协会管理细则 <br /> MP-426-009',
            data: {
              name: '公司文体协会管理细则',
              procedureid: 'C6ec9a314-5b21-4c93-953d-bdaf33d84dc3d',
              procCode: 'MP-426-009'
            }
          },
          {
            id: 'C2c7df436-1a03-4e5e-bad9-21fda3774c99d',
            text: '中广核工程有限公司职工技能竞赛管理办法 <br /> MP-426-011',
            data: {
              name: '中广核工程有限公司职工技能竞赛管理办法',
              procedureid: 'C2c7df436-1a03-4e5e-bad9-21fda3774c99d',
              procCode: 'MP-426-011'
            }
          }
        ],
        message: 'success'
      })
    }, 500)
  })
}
