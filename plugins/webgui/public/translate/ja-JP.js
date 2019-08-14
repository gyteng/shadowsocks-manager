module.exports = {
  // general
  '确定': '決定',
  '取消': 'キャンセル',
  '关闭': '閉じる',
  '下一步': '次へ',
  '下一条': '次へ',  // dialog/autopop
  // '修改': '変更',

  // home pages & dialogs
  // home/signup
  '邮箱': 'メール',
  '邮箱不能为空': 'メールアドレスを空にすることはできません',
  '验证码': '認証コード',
  '验证码不能为空': '認証コードを空にすることはできません',
  '发送验证码': '認証コードを送ります',
  '验证码已发至邮箱': 'あなたのメールアドレスに認証コードが送信されました',
  '密码': 'パスワード',
  '密码不能为空': 'パスワードを空にすることはできません',
  '用户注册成功':'登録されました',
  '用户注册失败': '登録に失敗しました',
  '网络异常，请稍后再试': 'ネットワーク障害が発生しました。後でもう一度お試しください',
  '验证码发送错误': '認証コード送信時エラーが発生しました',
  '发送错误，请更换邮箱尝试': '認証コードを送信できませんので別のメールアドレスを使用してみてください',
  '请求过于频繁，请稍后再试': 'リクエストが多すぎますので後でもう一度お試しください',
  '当前时段尚未开放注册': '今まで登録は利用できません',
  // home/signin
  '找回密码': 'パスワードをリセットします',
  '用户名或密码错误': 'ユーザー名またはパスワードが違いました',
  '该用户尚未注册': 'ユーザーが存在しません',
  '请输入正确的用户名格式': '無効なユーザー名',
  '密码重试次数已达上限\n请稍后再试': 'パスワード再試行回数が上限に達しました\n 後でもう一度お試しください',
  // home/resetPassword
  '请输入邮箱地址再点击“找回密码”': 'メールアドレスを入力してください',
  '重置密码链接已发至您的邮箱，\n请注意查收': 'パスワードリセットリンクを送信されました\n ご確認ください',
  '重置密码链接已经发送，\n请勿重复发送': 'パスワードリセットリンクを既に送信されました\n 再送信しないでください',
  '请输入正确的邮箱地址': '無効なメールアドレス。正しいメールアドレスを入力してください',

  // side nav
  '服务器': 'サーバー',
  '用户': 'ユーザー',
  '账号': 'アカウント',
  '订单': '注文',
  '设置': '設定',
  '退出': 'ログアウト',

  // settings menu
  // admin/settings
  '基本设置': '基本設定',
  '公告管理': 'お知らせ管理',
  '支付设置': 'お支払設定',
  '邮件设置': 'メール設定',
  '账号设置': 'アカウント設定',
  '修改密码': 'パスワードを変更します',

  // index pages
  // home/index
  '首页': 'ホーム',
  '登录': 'サインイン',
  '注册': 'サインアップ',
  // admin/index
  '最新注册用户': '最近の登録ユーザー',
  '最近登录用户': '最近のログインユーザー',
  '无': 'なし',
  // user/index
  '点击进入': 'ページへ移動します',
  '公告': 'お知らせ',
  '暂无公告': '現在お知らせはありません',
  '支付宝订单': 'Alipay でお支払注文',
  'PayPal 订单': 'PayPal でお支払注文',
  // dialog/language
  '请选择语言：': '言語を選択：',

  // server pages & dialogs
  // ref: plugins/webgui/public/controllers/adminServer.js
  // admin/server
  '本日流量：': '本日のデータ使用量：',
  '本周流量：': '今週のデータ使用量：',
  '本月流量：': '今月のデータ使用量：',
  // admin/addServer
  '备注': 'コメント',
  '地址': 'IP アドレス',
  '端口': 'ポート',
  '密码': 'パスワード',
  '加密方式': '暗号化方式',

  // user pages & dialogs
  // ref: plugins/webgui/public/controllers/adminUser.js
  // admin/userPage
  '注册时间': '登録日時',
  '上次登录': '前回のサインイン',

  // account pages & dialogs
  // ref: plugins/webgui/public/controllers/adminAccount.js
  // admin/accountPage
  '地址：': 'IP アドレス：',
  '端口：': 'ポート：',
  '密码：': 'パスワード：',
  '加密方式：': '暗号化方式：',
  '流量：': 'データ使用量：',
  '不限量': '無制限',
  '周期：': '契約期間：',
  '到期时间：': '契約終了日:',
  '不限时': '無制限',
  '最近连接：': '最後に接続：',
  '备注：': 'コメント：',
  '续费': '更新手続き',
  // admin/editAccount
  '类型': 'タイプ',
  '流量': 'データ使用量',
  '合并多服务器流量统计': 'マルチサーバーのデータ使用量を集計します',
  '已过期': '期限が切れ',
  // user/account
  '目前该用户没有分配账号，请联系管理员处理': 'アカウントが割り当てられていませんでした。管理者に連絡してください',
  '或': 'または',
  '点击这里': 'ここをクリックします',
  '付款立即开通帐号': 'お支払い後すぐにアカウントを発行します',
  // user/qrcodeDialog
  '点击二维码或者用移动设备扫描二维码可自动填充服务器信息': 'QRコードをクリック、またはスキャンして自動的にサーバの情報を取得できます',

  // oeder pages
  // admin/pay
  '创建': '作成',
  '等待': '保留',
  '付款': '支払',
  '完成': '完了',
  '已关闭': '閉じる',
  // dialog/pay
  '支付宝扫码支付': 'Alipay QR コードでお支払ください',
  '手机请点击二维码付款': 'スマートフォンで QR コードをクリックしてお支払ください',
  '请点击下面按钮完成 PayPal 支付': 'PayPal ユーザーの場合、以下のボタンをクリックしてください',
  '请选择续费周期：': 'サービスの更新期間を選択：',
  '一小时': '1時間',
  '一天': '1日',
  '一周': '1週間',
  '一个月': '1ヶ月',
  '三个月': '3ヶ月',
  '一年': '1年',
  '支付成功': '支払が完了しました',
  '订单会在两分钟内生效，请稍候': '注文は約2分後にアクティブにします。お待ちください',
  '系统错误': 'システムエラー',
  '生成支付订单出错，请稍后再试': '現在注文を処理できませんので後でもう一度お試しください',

  // dialog/order
  '订单号：': '注文番号：',
  '订单类型：': '注文タイプ：',
  '金额：': '小計：',
  '用户名：': 'ユーザー名：',
  '创建时间：': '作成時間：',
  '状态：': 'ステータス：',

  // setting pages
  // admin/baseSettings
  '网站标题': 'サイトのタイトル',
  '使用 Service Worker 缓存静态页面': 'Service Worker を使用して静的キャッシュページを作成します',
  '接收消息推送': 'プッシュメッセージを受信します',  '新用户自动分配账号': '新しいユーザーが自動割り当てアカウントを取得します',
  // admin/newOrder & admin/editOrder
  'Paypal': 'PayPal',
  // admin/accountSettings
  '新用户自动分配账号': '新しいユーザーが自動割り当てアカウントを取得します',
  '随机分配端口号': 'ランダムポート',
  '开放注册': '登録ができます',
  // admin/changePassword
  '原密码': '古いパスワードを入力ください',
  '新密码': '新しいパスワードを入力ください',
  '重复新密码': '新しいパスワードを再入力ください',
  '修改密码成功': 'パスワードの変更に成功しました',
  '修改密码失败': 'パスワードの変更に失敗しました',
};
