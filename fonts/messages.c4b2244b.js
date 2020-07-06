(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages"], {
    "129f": function (e, t) {
        e.exports = Object.is || function (e, t) {
            return e === t ? 0 !== e || 1 / e === 1 / t : e != e && t != t
        }
    }, "841c": function (e, t, i) {
        "use strict";
        var a = i("d784"), n = i("825a"), s = i("1d80"), r = i("129f"), o = i("14c3");
        a("search", 1, (function (e, t, i) {
            return [function (t) {
                var i = s(this), a = void 0 == t ? void 0 : t[e];
                return void 0 !== a ? a.call(t, i) : new RegExp(t)[e](String(i))
            }, function (e) {
                var a = i(t, e, this);
                if (a.done) return a.value;
                var s = n(e), l = String(this), h = s.lastIndex;
                r(h, 0) || (s.lastIndex = 0);
                var d = o(s, l);
                return r(s.lastIndex, h) || (s.lastIndex = h), null === d ? -1 : d.index
            }]
        }))
    }, c7da: function (e, t, i) {
        "use strict";
        i.r(t), i.d(t, "settings", (function () {
            return s
        }));
        i("ac1f"), i("841c"), i("1276");

        function a(e) {
            var t, i, a = decodeURIComponent(window.location.search.substring(1)), n = a.split("&");
            for (i = 0; i < n.length; i++) if (t = n[i].split("="), t[0] === e) return void 0 === t[1] || t[1]
        }

        var n = {
            en: {
                common: {progressBar: "Question"},
                button: {true: "true", false: "false", next: "next", showResult: "show result"},
                intro: {
                    title: "True or False?",
                    media: "img/intro.jpg",
                    content: "Press True or False on this site to reveal the truth about best sex, dick size and wealth. <br/> <br/>Be careful, this site can change your life. But the essence will be understood by the ones who can think about the future and are ready to improve thier lives.",
                    button: "Yes, i am ready!"
                },
                quiz: {
                    1: {
                        question: {
                            title: "Is it true that penis average size is 6 inches? ",
                            media: "img/slide1.jpg",
                            result: !1
                        },
                        answer: {
                            title: "It's false!",
                            media: "img/slide1-1.jpg",
                            content: "The majority of {GEO} men usually has 17-18 sm. If it's less then nothing personal. Mother Nature just doesn't favor everyone However, it can be fixed."
                        }
                    },
                    2: {
                        question: {
                            title: "Is it true that 63% of women fake an orgasm not to offend a man and his small penis?  ",
                            media: "img/slide2.jpg",
                            result: !0
                        },
                        answer: {
                            title: "Yes, it's true! ",
                            media: "img/slide2-1.jpg",
                            content: "In July 2019 British social scientists conducted a study among women and discovered that more than half of women fake orgasm and any form of pleasure in general. You can read about this research on the official site of Research Department of UK.<br/><br/>The truth is that women have a certain point which is responsible for pleasure. However, only a penis of 17-22 sm can reach it. Scientists called it Point 11 in honor of Mariana Trench (it's known depth is 11.000 km). <br/><br/>As it turns out, all women dream about a large and long penis which will make them deeper than Mariana Trench. They want their man to fuck them hard. They want their man to come in their faces. But in fact all they get... It is something they are ashamed of...\""
                        }
                    },
                    3: {
                        question: {
                            title: "Is it true that only the owners of large penis (7 inches and more) can fully enjoy sex?",
                            media: "img/slide3.jpg",
                            result: !0
                        },
                        answer: {
                            title: "Yes, it's true!",
                            media: "img/slide3-1.jpg",
                            content: "The larger the penis is, the stronger the feeling of pleasure. Evolution gave a strong erection and fantastic orgasms to the owners of large sizes. Chill down the spine, heart beating, a chill in the stomach, light dizziness... One of the survey participants compared that feeling with the moment when you sit down in your new Ferrari, start the car and hit the gas. <br/><br/>When a penis reach that Point 11, there's a chemical reaction, when serotonin and endorphin are being produced. So, usually a man with a penis of 4-6 inches can't feel any of it."
                        }
                    },
                    4: {
                        question: {
                            title: "Is it true that there is an integral relationship between the duration of act and the size of a penis?",
                            media: "img/slide4.jpg",
                            result: !0
                        },
                        answer: {
                            title: "Yes, it's true! ",
                            media: {
                                1: {media: "img/slide4-1.jpg"},
                                2: {media: "img/slide4-2.jpg"},
                                3: {media: "img/slide4-3.jpg"}
                            },
                            content: "Online survey on Playboy site has interviewed more than 100.000 men and supported that theory! <br/><br/>Have a look at the statistics. <br/><br/>In fact, only large sizes can have long sexual acts. This is due to the fact that large penises are much more tough and can contain more. Those guys have a lot of testosterone and serious balls. <br/><br/>They can fuck their bitches all night long. Women can only loudly moan, swallow tons of sperm and eagerly suck the dick of their possesor. By the way, such guys can punish three girls at a time. "
                        }
                    },
                    5: {
                        question: {
                            title: "Is it true that a man with a penis of 17 sm and more can have impotence earlier than others?",
                            media: "img/slide5.jpg",
                            result: !1
                        },
                        answer: {
                            title: "No, it is false.",
                            media: "img/slide5-1.jpg",
                            content: "It is the opposite. Biologists from all over the world are exlploring this phenomena, however, the Wikipedia material based on researches supports the theory.<br/><br/>«Men with penises less than 15 sm are vulnerable to the first stage of erectile dysfunction. This is due to the physiological and psychological features. A small penis eventually stops producing enough oxygen and blood. A general mood also has an impact: the owners of small sizes are more frequently inclined to be depressed, sad and withdrawn. Moreover, they have a tendency to develop some mental illnesses.» <br/> Reports Wikipedia. <br/><br/>Really, why get hard if you are already pathetic?"
                        }
                    },
                    6: {
                        question: {
                            title: "Is it true that a dick size affects incomes?",
                            media: "img/slide6.jpg",
                            result: !0
                        },
                        answer: {
                            title: "Unfortunately, it is true.",
                            media: "img/slide6-1.jpg",
                            content: "Forbes journalists conducted a study (it wasn't published due to the ethical reasons). That research shocked everyone! <br/><br/>There is antegral relationship between the success and the dick size. The majority of modern successful men has a penis of 7-9 inches. And there is nothing special since a large penis gives confidence in your own powers. There is desire to fuck not just a girl but the whole world. <br/><br/>Forbes 20 tells everything about their incomes but remains silent about their penis sizes. However, it is already known for a fact that Mark Zuckerberg, Elon Musk and Bill Gates and Donald Trump have sizes of around 8 inches. By the way, there is no penis less than 6 inches in Forbes."
                        }
                    },
                    7: {
                        question: {
                            title: "Is it true that a penis stops growing after 18?",
                            media: "img/slide7.jpg",
                            result: !0
                        },
                        answer: {
                            title: "Yeah, it's true!",
                            media: "img/slide7-1.jpg",
                            content: "It stops growing after 18. However, its size still can be enlarged. So, even hard 3,7 inches can turn in 6-8 inches without any surgeries."
                        }
                    },
                    8: {
                        question: {
                            title: "Is it true that some creams can change penis sizes?",
                            media: "img/slide8.jpg",
                            result: !0
                        },
                        answer: {
                            title: "Yeah, it's true!",
                            media: "video/titan1.mp4",
                            content: "We live in 2020. The science and medicine are constanltly developing, improving all sectors of society and helping to overcome various issues.<br/><br/>Even now there are many medications that can enlarge your penis on 2-6 inches. It can save your self-esteem, personal life, increase your income, destroy your rivals in both business and work. <br/><br/>All of these medications have a natural and ecological structure. It has been checked by the international associations and has received special certificates of quality. Especially for you, we've prepared a compilation of some medications that help to enlarge penis:<br/>* Cream AA <br/> * Cream BB <br/>* Cream CC",
                            productSlider: "true"
                        }
                    },
                    9: {
                        question: {
                            title: "Is it true that only 3% of men decide to enlarge their penises?",
                            media: "img/slide9.jpg",
                            result: !0
                        },
                        answer: {
                            title: "Yeah, it's true.",
                            media: "img/slide9-1.jpg",
                            content: 'Only 3% of men are ready to be responsible for their lives insead of blaming nature and everybody else. Only 3% are ready to change something and act. Only special people are able to change something!<br/><br/>"I know a lot of men. 90% of them are weaklings. They will be suffering for the whole life. Live in shit. Be content as they are. The will never go sailing with a classy blonde. They will never earn money. And they will never live their best lives. They are just losers. They are ok with this shit in their personal life, career. And they live with it. They are just idiots and cowards."<br/>Said Jason Statham in one of his interviews.'
                        }
                    },
                    10: {
                        question: {
                            title: "Is it true that 50% of men with large penises have got it from their birth?",
                            media: "img/slide10.jpg",
                            result: !1
                        },
                        answer: {
                            title: "No, it's not true.",
                            media: "img/slide10-1.jpg",
                            content: "Only a handful of men can have a large penis from their birth. In reality, more than half of big penises were enlarged with the help of natural creams."
                        }
                    }
                },
                results: {
                    options: [{
                        mask: {from: 1, to: 4},
                        message1: "Результат лучше чем у <strong>1%</strong> тестируемых",
                        message2: 'Да вы просто<br/> задрот!<img src="img/fire.png">',
                        message3: 'Вы отвратно справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                    }, {
                        mask: {from: 5, to: 7},
                        message1: "Результат лучше чем у <strong>50%</strong> тестируемых",
                        message2: 'Да вы просто<br/> кто-то!<img src="img/fire.png">',
                        message3: 'Вы средне справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                    }, {
                        mask: {from: 8, to: 10},
                        message1: "Результат лучше чем у <strong>87%</strong> тестируемых",
                        message2: 'Да вы просто<br/> эксперт!<img src="img/fire.png">',
                        message3: 'Вы отлично справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                    }]
                },
                productList: [{
                    image: "img/product.jpg",
                    imageMin: "img/product_min.jpg",
                    title: "Cream AA",
                    price: "55$",
                    linkTitle: "Shop now",
                    url: "http://google.com"
                }, {
                    image: "img/product.jpg",
                    imageMin: "img/product_min.jpg",
                    title: "Cream BA",
                    price: "65$",
                    linkTitle: "Shop now",
                    url: "http://google.com"
                }, {
                    image: "img/product.jpg",
                    imageMin: "img/product_min.jpg",
                    title: "Cream CA",
                    price: "75$",
                    linkTitle: "Shop now",
                    url: "http://google.com"
                }],
                form: {
                    title: "Would you like to order a cream for penis enlargement and change your life?",
                    labelName: "Ваше имя и фамилия",
                    errNameRequired: "Name is required",
                    maskPhone: "{+7} (000) 000-00-00",
                    labelPhone: "Номер телефона",
                    errPhoneInvalid: "Phone is invalid",
                    labelEmail: "Ваш e-mail",
                    errEmailInvalid: "E-mail is invalid",
                    errServer: "No send, try again later",
                    actionBtn: "Заказать"
                },
                final: {
                    title: "Ваша заявка принята!",
                    media: "img/slide-end.jpg",
                    content: "В ближайшие 2 часа с вами свяжется наш оператор для оформления вашего заказа! Пожалуйста, ожидайте.",
                    button: "На главную"
                }
            }, ru:
                {common: { progressBar: 'Question' },
                button: {
                    true: 'true',
                    false: 'false',
                    next: 'next',
                    showResult: 'show result'
                },
                intro: {
                    title: 'Правда или ложь?',
                    media: 'img/intro.jpg',
                    content: 'Жми «Правда» или «Ложь» на этом сайте, чтобы узнать всю правду о лучшем сексе, размере члена и богатстве. <br/> <br/>Будь осторожен, этот сайт может изменить твою жизнь. Но суть поймут только единицы, которые умеют думать о будущем, готовы улучшать свою жизнь и открыты к новому. ',
                    button: 'Да, я готов!'
                },
                quiz: {
                    1: {
                        question: {
                            title: 'Правда ли, что средний размер члена составляет 15 см?  ',
                            media: 'img/slide1.jpg',
                            result: false
                        },
                        answer: {
                            title: 'Это ложь!',
                            media: 'img/slide1-1.jpg',
                            content: 'У большинства мужчин в {GEO} длина члена колеблется в пределах 17-18 см. Если меньше, то ничего личного, просто природа благоволит далеко не каждому. Однако это можно исправить. Пройди весь опрос и узнай как. '
                        }
                    },
                    2: {
                        question: {
                            title: 'Правда ли, то 63% женщин симулирует оргазм, чтобы не оскорбить мужчину и его маленький член?  ',
                            media: 'img/slide2.jpg',
                            result: true
                        },
                        answer: {
                            title: 'Да, это правда!  ',
                            media: 'img/slide2-1.jpg',
                            content: 'В июле 2019 британские ученые-социологи провели исследование среди женщин и выяснили, что больше половины женщин симулирует оргазм и в целом любое проявление наслаждения. Об этом исследование можно прочитать на официальном сайте министерства исследовательских проектов Великобритании. <br/><br/>Дело в том, что у девушек есть определенная точка, которая и отвечает за удовольствие, но до нее может дотянуться лишь длинный член 17-22 см. Ученые назвали эту точку «11». В честь глубины марианской впадины в 11 000 км. <br/><br/>Оказывается, все девушки мечтают о большом и длинном агрегате, который сделает их глубже Марианской впадины. Они хотят, чтобы парень их жестко трахал. Они хотят, чтобы он кончал прямо им на лицо.. А на деле получают… то, о чем даже стыдно подругам рассказывать. '
                        }
                    },
                    3: {
                        question: {
                            title: 'Правда ли, что только обладатели большого члена (от 17 см) ощущают полное удовольствие от секса? ',
                            media: 'img/slide3.jpg',
                            result: true
                        },
                        answer: {
                            title: 'Да, конечно! Это правда! ',
                            media: 'img/slide3-1.jpg',
                            content: 'Чем больше член, тем сильнее ощущения и оргазм. Эволюция наградила обладателей внушительных размеров мощной эрекцией и фантастическими оргазмами.   Парни с большим членом рассказывают, что  испытывают невероятные эмоции. Мурашки по всей спине, пульсацию сердца, холодок в животе и легкое головокружение. Один участник опроса сравнил это ощущением с моментом, когда ты садишься в свою Ferrari, заводишь ее и жмешь на газ.  <br/><br/>Дело в том, что когда член дотягивается до той самой точки «11», происходит химическая реакция, при которой активно вырабатываются эндорфин и сератонин. А вот мужчинам с размером 10-15 см, обычно ничего из этого не светит. '
                        }
                    },
                    4: {
                        question: {
                            title: 'Правда ли, что между размером члена и длительностью полового акта есть взаимосвязь?',
                            media: 'img/slide4.jpg',
                            result: true
                        },
                        answer: {
                            title: 'Да, это правда.  ',
                            media: {
                                1: { media: 'img/slide4-1.jpg' },
                                2: { media: 'img/slide4-2.jpg' },
                                3: { media: 'img/slide4-3.jpg' }
                            },
                            content: 'Онлайн-опрос на сайте Playboy, в котором приняли участие 100.000 мужчин подтвердил эту теорию! <br/><br/>Вот статистика <br/><br/>В действительности только большие размеры способны на длительные половые акты. Связано это с тем, что большие члены более выносливы и куда объемнее. У этих парней высокий уровень тестостерона и серьезные яйца.  <br/><br/>Они могут драть своих сучек ночами на пролет. А женщинам только и остается, что громко стонать, заглатывать тоны спермы и жадно сосать член своего покорителя. Кстати, только такие парни в силах и троих за ночь наказать. '
                        }
                    },
                    5: {
                        question: {
                            title: 'Правда ли, что у мужчин с членом больше 17 см раньше наступает 1 стадия импотенции? ',
                            media: 'img/slide5.jpg',
                            result: false
                        },
                        answer: {
                            title: 'Нет, это ложь!',
                            media: 'img/slide5-1.jpg',
                            content: 'Все как раз-таки наоборот.  Биологии все еще изучают этот феномен, однако материалы Wikipedia, опирающиеся на исследования, подтверждают теорию. <br/><br/>Первой стадии эректильная дисфункция очень сильно подвержены мужчины с маленькими членами до 15 см. Связано это с физиологическими и с психоэмоциональными особенностями. Со времен маленький член перестает вырабатывать достаточно кислорода и крови. Также влияет общее настроение мужчины: обладатели маленьких размеров чаще склонны к развитию депрессии и других психических расстройств»  <br/>  Сообщает материал Wikipedia. <br/><br/>И действительно, зачем вставать, если ты и так никчемен?'
                        }
                    },
                    6: {
                        question: {
                            title: 'Правда ли, что размер члена влияет на  уровень дохода?',
                            media: 'img/slide6.jpg',
                            result: true
                        },
                        answer: {
                            title: 'Unfortunately, it is true.',
                            media: 'img/slide6-1.jpg',
                            content: 'К сожалению да, это правда.  Журналисты Forbes провели исследование (оно не было опубликовано по этическим причинам). Это исследование повергло всех в шок!   <br/><br/>Между успешностью и размером члена есть тесная связь. Большинство современных успешных мужчин имеют агрегат от 17 см. И ничего удивительного, ведь большой член дает уверенность в собственных силах. Появляется желание и силы трахнуть не только девушку, но и весь мир. <br/><br/>Двадцатка Форбс рассказывают о цифрах своих доходов, но помалкивает о цифрах собственных членов. Однако уже достоверно известно, что у Марка Цукеберга, Илона Маска, Билла Гейтса, Дональда Трампа размеры около 20 см. А вот с членом до 17 см нет ни одного человека в списке Forbes.'
                        }
                    },
                    7: {
                        question: {
                            title: 'Правда ли, что размер члена после 18 не увеличивается?',
                            media: 'img/slide7.jpg',
                            result: true
                        },
                        answer: {
                            title: 'Да, это правда!',
                            media: 'img/slide7-1.jpg',
                            content: 'После 18 ваш малыш перестает расти. Однако его размер все равно можно увеличить. Так что даже из 9,5 см в стоячем состоянии можно сделать солидный инструмент. Притом без хирургического вмешательства. '
                        }
                    },
                    8: {
                        question: {
                            title: 'Правда ли, что существуют крема, которые увеличивают размер члена?',
                            media: 'img/slide8.jpg',
                            result: true
                        },
                        answer: {
                            title: 'Да, это правда!',
                            media: 'video/maral.mp4',
                            content: 'Мы живем в 2020 году. Наука и медицина развивается семимильными шагами, улучшая все сферы жизни общества и помогая справится с разными проблемами.<br/><br/>Уже сейчас существует несколько препаратов, которые могут увеличить ваш член на 7 - 15 см. Спасти самооценку, личную жизнь, повысить уровень доход, уничтожить конкурентов в бизнесе и на работе. <br/><br/>Все эти препараты обладают натуральным экологическим составами. Прошли проверку в международной ассоциации. Получили сертификаты. Специально для вас мы сделали подборку. Вот некоторые препараты, помогающие увеличить член:<br/>* Cream AA <br/> * Cream BB <br/>* Cream CC',
                            productSlider: true
                        }
                    },
                    9: {
                        question: {
                            title: 'Правда ли, что только 3% мужчин решаются увеличить свой член? ',
                            media: 'img/slide9.jpg',
                            result: true
                        },
                        answer: {
                            title: 'Да, это правда.',
                            media: 'img/slide9-1.jpg',
                            content: 'Всего 3% мужчин готовы взять ответственность за свою жизнь на себя, а не обвинять природу и всех вокруг. Только 3% готовы что-то менять и действовать. Только уникальные люди способны что-то изменить! <br/><br/>"«Я знаю огромное количество мужчин. И из них 90% слабаки. Они всю жизнь будут страдать. Жить в дерьме. Довольствоваться тем, что есть. Они никогда не прокататься на яхте с шикарной блондинкой. Не заработают денег. И не проживут счастливую жизнь. Они просто неудачники. Они согласны с дерьмом в личной жизни, карьере и живут с этим. Просто идиоты и трусы» "<br/>Сказал в одном из своих интервью Jason Statham'
                        }
                    },
                    10: {
                        question: {
                            title: 'Правда ли, что 50% из тех, кто имеет большой член получили его с рождения? ',
                            media: 'img/slide10.jpg',
                            result: false
                        },
                        answer: {
                            title: 'Нет, это не правда. ',
                            media: 'img/slide10-1.jpg',
                            content: 'С рождения крупным членом обладают единицы. В реальности практически каждый второй крупный член был увеличен с помощью натуральных кремов. '
                        }
                    }
                },
                results: {
                    options: [{
                        mask: {
                            from: 1,
                            to: 4
                        },
                        message1: 'Результат лучше чем у <strong>1%</strong> тестируемых',
                        message2: 'Да вы просто<br/> задрот!<img src="img/fire.png">',
                        message3: 'Поздравляем! Похоже, ты неплохо разбираешься в своей физиологии. Однако ты раскрыл еще не все секреты своего дружка.  <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                    }, {
                        mask: {
                            from: 5,
                            to: 7
                        },
                        message1: 'Результат лучше чем у <strong>50%</strong> тестируемых',
                        message2: 'Да вы просто<br/> кто-то!<img src="img/fire.png">',
                        message3: 'Вы средне справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                    }, {
                        mask: {
                            from: 8,
                            to: 10
                        },
                        message1: 'Результат лучше чем у <strong>87%</strong> тестируемых',
                        message2: 'Да вы просто<br/> эксперт!<img src="img/fire.png">',
                        message3: 'Вы отлично справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                    }]
                },
                productList: [{
                    image: 'img/product.jpg',
                    imageMin: 'img/product_min.jpg',
                    title: 'Cream AA',
                    price: '55$',
                    linkTitle: 'Shop now',
                    url: 'http://google.com'
                }, {
                    image: 'img/product.jpg',
                    imageMin: 'img/product_min.jpg',
                    title: 'Cream BA',
                    price: '65$',
                    linkTitle: 'Shop now',
                    url: 'http://google.com'
                }, {
                    image: 'img/product.jpg',
                    imageMin: 'img/product_min.jpg',
                    title: 'Cream CA',
                    price: '75$',
                    linkTitle: 'Shop now',
                    url: 'http://google.com'
                }],
                form: {
                    title: 'Would you like to order a cream for penis enlargement and change your life?',
                    labelName: 'Ваше имя и фамилия',
                    errNameRequired: 'Name is required',
                    maskPhone: '{+7} (000) 000-00-00',
                    labelPhone: 'Номер телефона',
                    errPhoneInvalid: 'Phone is invalid',
                    labelEmail: 'Ваш e-mail',
                    errEmailInvalid: 'E-mail is invalid',
                    errServer: 'No send, try again later',
                    actionBtn: 'Заказать'
                },
                final: {
                    title: 'Ваша заявка принята!',
                    media: 'img/slide-end.jpg',
                    content: 'В ближайшие 2 часа с вами свяжется наш оператор для оформления вашего заказа! Пожалуйста, ожидайте.',
                    button: 'На главную'
                } }, es: {}, fr: {}
        }, s = {
            click_id: a("sub1"),
            leadform_id: 11,
            user_geo: a("geo"),
            vertical_id: 3,
            offerteam_id: 4,
            buyer: a("b"),
            ip: a("ip"),
            url: "http://135.181.31.216/api/new_lead/"
        };
        t["default"] = n
    }
}]);