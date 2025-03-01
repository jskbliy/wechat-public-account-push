/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx701e54957e6e9549',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'cb98b5f84682598252c1c07b86c89039',

  PROVINCE: '山东',
  CITY: '潍坊',

  USERS: [
    {
      // 想要发送的人的名字
      name: '晓玉',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o-vVv50xRz05noRng7BWvjKghPI8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Y5DFuzXekNGBcZUy2vUrBUwz-aQJ_FBEkJKVJRMREF0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
//         {
//           type: '*生日', name: '晓玉', year: '1999', date: '03-22',
//         },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
//         {
//           type: '生日', name: '陈铄', year: '1998', date: '11-30',
//         },
//         {
//           type: '节日', name: '2023年考研', year: '2019', date: '12-25',
//         },
         {
          type: '节日', name: '2023年元旦', year: '2019', date: '01-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-01-25' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'aBY09coC_VulIjOw3QcAmU0xveAo2bJz9L_HyhjHJqA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o-vVv50xRz05noRng7BWvjKghPI8',
    }
  ],

}

module.exports = USER_CONFIG

