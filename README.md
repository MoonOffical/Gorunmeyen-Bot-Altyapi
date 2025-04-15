# Görünmeyen Spam Bot

**Botu nasıl kullanırım?**
- Botu kullanabilmek için developer portalda botu oluşturduktan sonra oauth2 kısmından **application.commands** seçeneğini seçerek bir tane **User İnstall** oauth2'si oluşturuyorsunuz.
- Daha sonra bu yetkilendirme işlemi yapıyorsunuz ve istediğiniz sunucuda /spam yazarak botu test ediyorsunuz.

**Botu Nasıl Aktif Edebilirim?**
- Developer portaldan botu oluşturup **Presence Intent**, **Server Members Intent** ve **Message Content Intent**'lerini açıp botun tokenini resetlemeniz gerekmekte.
- Daha sonra **ayarlar.js** dosyasına girip tokeni oraya yerleştirmeniz gerekmekte.
- Daha sonra konsolu açıp **npm install** yapmalısınız en sonda ise **node .** veya **node index.js** yazarak botu aktif edebilirsiniz.

**Code World**: https://discord.gg/pGA9M5UCnt
