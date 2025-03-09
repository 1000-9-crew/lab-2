var express = require('express');
var router = express.Router();

const crew = {
    title: "Бриґада 1000-9 🎀",
    members: [
        { id:"flex7r", name: "Руссу Артем", github: "https://github.com/flex7r", image: "flex7r.png", roles: ["розробник", "вайперр"] },
        { id:"brieflyl", name: "Перехрест Людмила", github: "https://github.com/brieflyl", image: "brieflyl.png", roles: ["тестувальник", "любить котів"] },
        {
            id:"blarneyyy", name: "Шнайдер Дарина", github: "https://github.com/blarneyyy", image: "blarneyy.png", roles: [
                "пм", "мейн муерти", "керівник проєкту", "копірайтер", "менеджер проєкту",
                "технічний лідер", "лідер команди", "клієнт", "аналітик/бізнес аналітик/експерт",
                "системний адміністратор", "менеджер змін", "головний архітектор", "тестувальник",
                "розробник користувацького інтерфейсу", "відповідальний за документацію",
                "тренер"
            ]
        }
    ]
};

router.get('/', function (req, res, next) {
    res.render('crew', crew);
});

router.get('/:id', function (req, res, next) {
    const memberId = req.params.id;
    const member = crew.members.find(m => m.id === memberId);

    if (!member) {
        return res.status(404).send('Учасника не знайдено');
    }

    res.render('member', { title: member.id, member });
});

module.exports = router;
