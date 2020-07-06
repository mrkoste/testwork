(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["messages"],
  {
    "129f": function(e, t) {
      e.exports =
        Object.is ||
        function(e, t) {
          return e === t ? 0 !== e || 1 / e === 1 / t : e != e && t != t;
        };
    },
    "841c": function(e, t, i) {
      "use strict";
      var a = i("d784"),
        n = i("825a"),
        s = i("1d80"),
        r = i("129f"),
        o = i("14c3");
      a("search", 1, function(e, t, i) {
        return [
          function(t) {
            var i = s(this),
              a = void 0 == t ? void 0 : t[e];
            return void 0 !== a ? a.call(t, i) : new RegExp(t)[e](String(i));
          },
          function(e) {
            var a = i(t, e, this);
            if (a.done) return a.value;
            var s = n(e),
              l = String(this),
              h = s.lastIndex;
            r(h, 0) || (s.lastIndex = 0);
            var d = o(s, l);
            return (
              r(s.lastIndex, h) || (s.lastIndex = h), null === d ? -1 : d.index
            );
          }
        ];
      });
    },
    c7da: function(e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, "settings", function() {
          return s;
        });
      i("ac1f"), i("841c"), i("1276");

      function a(e) {
        var t,
          i,
          a = decodeURIComponent(window.location.search.substring(1)),
          n = a.split("&");
        for (i = 0; i < n.length; i++)
          if (((t = n[i].split("=")), t[0] === e))
            return void 0 === t[1] || t[1];
      }

      var n = {
          en: {
            common: { progressBar: "Question" },
            button: {
              true: "true",
              false: "false",
              next: "next",
              showResult: "show result"
            },
            intro: {
              title: "True or False?",
              media: "img/intro.jpg",
              content:
                "Press True or False on this site to reveal the truth about best sex, dick size and wealth. <br/> <br/>Be careful, this site can change your life. But the essence will be understood by the ones who can think about the future and are ready to improve thier lives.",
              button: "Yes, i am ready!"
            },
            quiz: {
              1: {
                question: {
                  title: "Is it true that penis average size is 6 inches? ",
                  media: "img/slide1.jpg",
                  result: false
                },
                answer: {
                  title: "It's false!",
                  media: "img/slide1-1.jpg",
                  content:
                    "The majority of {GEO} men usually has 17-18 sm. If it's less then nothing personal. Mother Nature just doesn't favor everyone However, it can be fixed."
                }
              },
              2: {
                question: {
                  title:
                    "Is it true that 63% of women fake an orgasm not to offend a man and his small penis?  ",
                  media: "img/slide2.jpg",
                  result: true
                },
                answer: {
                  title: "Yes, it's true! ",
                  media: "img/slide2-1.jpg",
                  content:
                    "In July 2019 British social scientists conducted a study among women and discovered that more than half of women fake orgasm and any form of pleasure in general. You can read about this research on the official site of Research Department of UK.<br/><br/>The truth is that women have a certain point which is responsible for pleasure. However, only a penis of 17-22 sm can reach it. Scientists called it Point 11 in honor of Mariana Trench (it's known depth is 11.000 km). <br/><br/>As it turns out, all women dream about a large and long penis which will make them deeper than Mariana Trench. They want their man to fuck them hard. They want their man to come in their faces. But in fact all they get... It is something they are ashamed of...\""
                }
              },
              3: {
                question: {
                  title:
                    "Is it true that only the owners of large penis (7 inches and more) can fully enjoy sex?",
                  media: "img/slide3.jpg",
                  result: true
                },
                answer: {
                  title: "Yes, it's true!",
                  media: "img/slide3-1.jpg",
                  content:
                    "The larger the penis is, the stronger the feeling of pleasure. Evolution gave a strong erection and fantastic orgasms to the owners of large sizes. Chill down the spine, heart beating, a chill in the stomach, light dizziness... One of the survey participants compared that feeling with the moment when you sit down in your new Ferrari, start the car and hit the gas. <br/><br/>When a penis reach that Point 11, there's a chemical reaction, when serotonin and endorphin are being produced. So, usually a man with a penis of 4-6 inches can't feel any of it."
                }
              },
              4: {
                question: {
                  title:
                    "Is it true that there is an integral relationship between the duration of act and the size of a penis?",
                  media: "img/slide4.jpg",
                  result: true
                },
                answer: {
                  title: "Yes, it's true! ",
                  media: {
                    1: { media: "img/slide4-1.jpg" },
                    2: { media: "img/slide4-2.jpg" },
                    3: { media: "img/slide4-3.jpg" }
                  },
                  content:
                    "Online survey on Playboy site has interviewed more than 100.000 men and supported that theory! <br/><br/>Have a look at the statistics. <br/><br/>In fact, only large sizes can have long sexual acts. This is due to the fact that large penises are much more tough and can contain more. Those guys have a lot of testosterone and serious balls. <br/><br/>They can fuck their bitches all night long. Women can only loudly moan, swallow tons of sperm and eagerly suck the dick of their possesor. By the way, such guys can punish three girls at a time. "
                }
              },
              5: {
                question: {
                  title:
                    "Is it true that a man with a penis of 17 sm and more can have impotence earlier than others?",
                  media: "img/slide5.jpg",
                  result: false
                },
                answer: {
                  title: "No, it is false.",
                  media: "img/slide5-1.jpg",
                  content:
                    "It is the opposite. Biologists from all over the world are exlploring this phenomena, however, the Wikipedia material based on researches supports the theory.<br/><br/>«Men with penises less than 15 sm are vulnerable to the first stage of erectile dysfunction. This is due to the physiological and psychological features. A small penis eventually stops producing enough oxygen and blood. A general mood also has an impact: the owners of small sizes are more frequently inclined to be depressed, sad and withdrawn. Moreover, they have a tendency to develop some mental illnesses.» <br/> Reports Wikipedia. <br/><br/>Really, why get hard if you are already pathetic?"
                }
              },
              6: {
                question: {
                  title: "Is it true that a dick size affects incomes?",
                  media: "img/slide6.jpg",
                  result: true
                },
                answer: {
                  title: "Unfortunately, it is true.",
                  media: "img/slide6-1.jpg",
                  content:
                    "Forbes journalists conducted a study (it wasn't published due to the ethical reasons). That research shocked everyone! <br/><br/>There is antegral relationship between the success and the dick size. The majority of modern successful men has a penis of 7-9 inches. And there is nothing special since a large penis gives confidence in your own powers. There is desire to fuck not just a girl but the whole world. <br/><br/>Forbes 20 tells everything about their incomes but remains silent about their penis sizes. However, it is already known for a fact that Mark Zuckerberg, Elon Musk and Bill Gates and Donald Trump have sizes of around 8 inches. By the way, there is no penis less than 6 inches in Forbes."
                }
              },
              7: {
                question: {
                  title: "Is it true that a penis stops growing after 18?",
                  media: "img/slide7.jpg",
                  result: true
                },
                answer: {
                  title: "Yeah, it's true!",
                  media: "img/slide7-1.jpg",
                  content:
                    "It stops growing after 18. However, its size still can be enlarged. So, even hard 3,7 inches can turn in 6-8 inches without any surgeries."
                }
              },
              8: {
                question: {
                  title: "Is it true that some creams can change penis sizes?",
                  media: "img/slide8.jpg",
                  result: true
                },
                answer: {
                  title: "Yeah, it's true!",
                  media: "video/titan1.mp4",
                  content:
                    "We live in 2020. The science and medicine are constanltly developing, improving all sectors of society and helping to overcome various issues.<br/><br/>Even now there are many medications that can enlarge your penis on 2-6 inches. It can save your self-esteem, personal life, increase your income, destroy your rivals in both business and work. <br/><br/>All of these medications have a natural and ecological structure. It has been checked by the international associations and has received special certificates of quality. Especially for you, we've prepared a compilation of some medications that help to enlarge penis:<br/>* Cream AA <br/> * Cream BB <br/>* Cream CC",
                  productSlider: "true"
                }
              },
              9: {
                question: {
                  title:
                    "Is it true that only 3% of men decide to enlarge their penises?",
                  media: "img/slide9.jpg",
                  result: true
                },
                answer: {
                  title: "Yeah, it's true.",
                  media: "img/slide9-1.jpg",
                  content:
                    'Only 3% of men are ready to be responsible for their lives insead of blaming nature and everybody else. Only 3% are ready to change something and act. Only special people are able to change something!<br/><br/>"I know a lot of men. 90% of them are weaklings. They will be suffering for the whole life. Live in shit. Be content as they are. The will never go sailing with a classy blonde. They will never earn money. And they will never live their best lives. They are just losers. They are ok with this shit in their personal life, career. And they live with it. They are just idiots and cowards."<br/>Said Jason Statham in one of his interviews.'
                }
              },
              10: {
                question: {
                  title:
                    "Is it true that 50% of men with large penises have got it from their birth?",
                  media: "img/slide10.jpg",
                  result: false
                },
                answer: {
                  title: "No, it's not true.",
                  media: "img/slide10-1.jpg",
                  content:
                    "Only a handful of men can have a large penis from their birth. In reality, more than half of big penises were enlarged with the help of natural creams."
                }
              }
            },
            results: {
              options: [
                {
                  mask: {
                    from: 1,
                    to: 4
                  },
                  message1:
                    "Результат лучше чем у <strong>1%</strong> тестируемых",
                  message2: 'Да вы просто<br/> задрот!<img src="img/fire.png">',
                  message3:
                    'Вы отвратно справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                },
                {
                  mask: {
                    from: 5,
                    to: 7
                  },
                  message1:
                    "Результат лучше чем у <strong>50%</strong> тестируемых",
                  message2: 'Да вы просто<br/> кто-то!<img src="img/fire.png">',
                  message3:
                    'Вы средне справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                },
                {
                  mask: {
                    from: 8,
                    to: 10
                  },
                  message1:
                    "Результат лучше чем у <strong>87%</strong> тестируемых",
                  message2:
                    'Да вы просто<br/> эксперт!<img src="img/fire.png">',
                  message3:
                    'Вы отлично справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                }
              ]
            },
            productList: [
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream AA",
                price: "55$",
                linkTitle: "Shop now",
                url: "http://google.com"
              },
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream BA",
                price: "65$",
                linkTitle: "Shop now",
                url: "http://google.com"
              },
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream CA",
                price: "75$",
                linkTitle: "Shop now",
                url: "http://google.com"
              }
            ],
            form: {
              title:
                "Would you like to order a cream for penis enlargement and change your life?",
              labelName: "Ваше имя и фамилия",
              errNameRequired: "Name is required",
              maskPhone: "{+453} (000) 000-00-00",
              regionPrefix: "0",
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
              content:
                "В ближайшие 2 часа с вами свяжется наш оператор для оформления вашего заказа! Пожалуйста, ожидайте.",
              button: "На главную"
            }
          },
          ru: {
            common: { progressBar: "Question" },
            button: {
              true: "true",
              false: "false",
              next: "next",
              showResult: "show result"
            },
            intro: {
              title: "Правда или ложь?",
              media: "img/intro.jpg",
              content:
                "Жми «Правда» или «Ложь» на этом сайте, чтобы узнать всю правду о лучшем сексе, размере члена и богатстве. <br/> <br/>Будь осторожен, этот сайт может изменить твою жизнь. Но суть поймут только единицы, которые умеют думать о будущем, готовы улучшать свою жизнь и открыты к новому. ",
              button: "Да, я готов!"
            },
            quiz: {
              1: {
                question: {
                  title:
                    "Правда ли, что средний размер члена составляет 15 см?  ",
                  media: "img/slide1.jpg",
                  result: false
                },
                answer: {
                  title: "Это ложь!",
                  media: "img/slide1-1.jpg",
                  content:
                    "У большинства мужчин в {GEO} длина члена колеблется в пределах 17-18 см. Если меньше, то ничего личного, просто природа благоволит далеко не каждому. Однако это можно исправить. Пройди весь опрос и узнай как. "
                }
              },
              2: {
                question: {
                  title:
                    "Правда ли, то 63% женщин симулирует оргазм, чтобы не оскорбить мужчину и его маленький член?  ",
                  media: "img/slide2.jpg",
                  result: true
                },
                answer: {
                  title: "Да, это правда!  ",
                  media: "img/slide2-1.jpg",
                  content:
                    "В июле 2019 британские ученые-социологи провели исследование среди женщин и выяснили, что больше половины женщин симулирует оргазм и в целом любое проявление наслаждения. Об этом исследование можно прочитать на официальном сайте министерства исследовательских проектов Великобритании. <br/><br/>Дело в том, что у девушек есть определенная точка, которая и отвечает за удовольствие, но до нее может дотянуться лишь длинный член 17-22 см. Ученые назвали эту точку «11». В честь глубины марианской впадины в 11 000 км. <br/><br/>Оказывается, все девушки мечтают о большом и длинном агрегате, который сделает их глубже Марианской впадины. Они хотят, чтобы парень их жестко трахал. Они хотят, чтобы он кончал прямо им на лицо.. А на деле получают… то, о чем даже стыдно подругам рассказывать. "
                }
              },
              3: {
                question: {
                  title:
                    "Правда ли, что только обладатели большого члена (от 17 см) ощущают полное удовольствие от секса? ",
                  media: "img/slide3.jpg",
                  result: true
                },
                answer: {
                  title: "Да, конечно! Это правда! ",
                  media: "img/slide3-1.jpg",
                  content:
                    "Чем больше член, тем сильнее ощущения и оргазм. Эволюция наградила обладателей внушительных размеров мощной эрекцией и фантастическими оргазмами.   Парни с большим членом рассказывают, что  испытывают невероятные эмоции. Мурашки по всей спине, пульсацию сердца, холодок в животе и легкое головокружение. Один участник опроса сравнил это ощущением с моментом, когда ты садишься в свою Ferrari, заводишь ее и жмешь на газ.  <br/><br/>Дело в том, что когда член дотягивается до той самой точки «11», происходит химическая реакция, при которой активно вырабатываются эндорфин и сератонин. А вот мужчинам с размером 10-15 см, обычно ничего из этого не светит. "
                }
              },
              4: {
                question: {
                  title:
                    "Правда ли, что между размером члена и длительностью полового акта есть взаимосвязь?",
                  media: "img/slide4.jpg",
                  result: true
                },
                answer: {
                  title: "Да, это правда.  ",
                  media: {
                    1: { media: "img/slide4-1.jpg" },
                    2: { media: "img/slide4-2.jpg" },
                    3: { media: "img/slide4-3.jpg" }
                  },
                  content:
                    "Онлайн-опрос на сайте Playboy, в котором приняли участие 100.000 мужчин подтвердил эту теорию! <br/><br/>Вот статистика <br/><br/>В действительности только большие размеры способны на длительные половые акты. Связано это с тем, что большие члены более выносливы и куда объемнее. У этих парней высокий уровень тестостерона и серьезные яйца.  <br/><br/>Они могут драть своих сучек ночами на пролет. А женщинам только и остается, что громко стонать, заглатывать тоны спермы и жадно сосать член своего покорителя. Кстати, только такие парни в силах и троих за ночь наказать. "
                }
              },
              5: {
                question: {
                  title:
                    "Правда ли, что у мужчин с членом больше 17 см раньше наступает 1 стадия импотенции? ",
                  media: "img/slide5.jpg",
                  result: false
                },
                answer: {
                  title: "Нет, это ложь!",
                  media: "img/slide5-1.jpg",
                  content:
                    "Все как раз-таки наоборот.  Биологии все еще изучают этот феномен, однако материалы Wikipedia, опирающиеся на исследования, подтверждают теорию. <br/><br/>Первой стадии эректильная дисфункция очень сильно подвержены мужчины с маленькими членами до 15 см. Связано это с физиологическими и с психоэмоциональными особенностями. Со времен маленький член перестает вырабатывать достаточно кислорода и крови. Также влияет общее настроение мужчины: обладатели маленьких размеров чаще склонны к развитию депрессии и других психических расстройств»  <br/>  Сообщает материал Wikipedia. <br/><br/>И действительно, зачем вставать, если ты и так никчемен?"
                }
              },
              6: {
                question: {
                  title:
                    "Правда ли, что размер члена влияет на  уровень дохода?",
                  media: "img/slide6.jpg",
                  result: true
                },
                answer: {
                  title: "К сожалению да, это правда.",
                  media: "img/slide6-1.jpg",
                  content:
                    " Журналисты Forbes провели исследование (оно не было опубликовано по этическим причинам). Это исследование повергло всех в шок!   <br/><br/>Между успешностью и размером члена есть тесная связь. Большинство современных успешных мужчин имеют агрегат от 17 см. И ничего удивительного, ведь большой член дает уверенность в собственных силах. Появляется желание и силы трахнуть не только девушку, но и весь мир. <br/><br/>Двадцатка Форбс рассказывают о цифрах своих доходов, но помалкивает о цифрах собственных членов. Однако уже достоверно известно, что у Марка Цукеберга, Илона Маска, Билла Гейтса, Дональда Трампа размеры около 20 см. А вот с членом до 17 см нет ни одного человека в списке Forbes."
                }
              },
              7: {
                question: {
                  title:
                    "Правда ли, что размер члена после 18 не увеличивается?",
                  media: "img/slide7.jpg",
                  result: true
                },
                answer: {
                  title: "Да, это правда!",
                  media: "img/slide7-1.jpg",
                  content:
                    "После 18 ваш малыш перестает расти. Однако его размер все равно можно увеличить. Так что даже из 9,5 см в стоячем состоянии можно сделать солидный инструмент. Притом без хирургического вмешательства. "
                }
              },
              8: {
                question: {
                  title:
                    "Правда ли, что существуют крема, которые увеличивают размер члена?",
                  media: "img/slide8.jpg",
                  result: true
                },
                answer: {
                  title: "Да, это правда!",
                  media: "video/maral.mp4",
                  content:
                    "Мы живем в 2020 году. Наука и медицина развивается семимильными шагами, улучшая все сферы жизни общества и помогая справится с разными проблемами.<br/><br/>Уже сейчас существует несколько препаратов, которые могут увеличить ваш член на 7 - 15 см. Спасти самооценку, личную жизнь, повысить уровень доход, уничтожить конкурентов в бизнесе и на работе. <br/><br/>Все эти препараты обладают натуральным экологическим составами. Прошли проверку в международной ассоциации. Получили сертификаты. Специально для вас мы сделали подборку. Вот некоторые препараты, помогающие увеличить член:<br/>* Cream AA <br/> * Cream BB <br/>* Cream CC",
                  productSlider: true
                }
              },
              9: {
                question: {
                  title:
                    "Правда ли, что только 3% мужчин решаются увеличить свой член? ",
                  media: "img/slide9.jpg",
                  result: true
                },
                answer: {
                  title: "Да, это правда.",
                  media: "img/slide9-1.jpg",
                  content:
                    'Всего 3% мужчин готовы взять ответственность за свою жизнь на себя, а не обвинять природу и всех вокруг. Только 3% готовы что-то менять и действовать. Только уникальные люди способны что-то изменить! <br/><br/>"«Я знаю огромное количество мужчин. И из них 90% слабаки. Они всю жизнь будут страдать. Жить в дерьме. Довольствоваться тем, что есть. Они никогда не прокататься на яхте с шикарной блондинкой. Не заработают денег. И не проживут счастливую жизнь. Они просто неудачники. Они согласны с дерьмом в личной жизни, карьере и живут с этим. Просто идиоты и трусы» "<br/>Сказал в одном из своих интервью Jason Statham'
                }
              },
              10: {
                question: {
                  title:
                    "Правда ли, что 50% из тех, кто имеет большой член получили его с рождения? ",
                  media: "img/slide10.jpg",
                  result: false
                },
                answer: {
                  title: "Нет, это не правда. ",
                  media: "img/slide10-1.jpg",
                  content:
                    "С рождения крупным членом обладают единицы. В реальности практически каждый второй крупный член был увеличен с помощью натуральных кремов. "
                }
              }
            },
            results: {
              options: [
                {
                  mask: {
                    from: 1,
                    to: 4
                  },
                  message1:
                    "Результат лучше чем у <strong>1%</strong> тестируемых",
                  message2: 'Да вы просто<br/> задрот!<img src="img/fire.png">',
                  message3:
                    'Поздравляем! Похоже, ты неплохо разбираешься в своей физиологии. Однако ты раскрыл еще не все секреты своего дружка.  <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                },
                {
                  mask: {
                    from: 5,
                    to: 7
                  },
                  message1:
                    "Результат лучше чем у <strong>50%</strong> тестируемых",
                  message2: 'Да вы просто<br/> кто-то!<img src="img/fire.png">',
                  message3:
                    'Вы средне справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                },
                {
                  mask: {
                    from: 8,
                    to: 10
                  },
                  message1:
                    "Результат лучше чем у <strong>87%</strong> тестируемых",
                  message2:
                    'Да вы просто<br/> эксперт!<img src="img/fire.png">',
                  message3:
                    'Вы отлично справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                }
              ]
            },
            productList: [
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream AA",
                price: "55$",
                linkTitle: "Shop now",
                url: "http://google.com"
              },
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream BA",
                price: "65$",
                linkTitle: "Shop now",
                url: "http://google.com"
              },
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream CA",
                price: "75$",
                linkTitle: "Shop now",
                url: "http://google.com"
              }
            ],
            form: {
              title:
                "Would you like to order a cream for penis enlargement and change your life?",
              labelName: "Ваше имя и фамилия",
              errNameRequired: "Name is required",
              maskPhone: "{+7} (000) 000-00-00",
              regionPrefix: "0",
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
              content:
                "В ближайшие 2 часа с вами свяжется наш оператор для оформления вашего заказа! Пожалуйста, ожидайте.",
              button: "На главную"
            }
          },
          ba: {
            common: { progressBar: "Question" },
            button: {
              true: "true",
              false: "false",
              next: "next",
              showResult: "show result"
            },
            intro: {
              title: "Правда или ложь? (в таблице нет перевода)",
              media: "img/intro.jpg",
              content:
                "Pritisnite Tačno ili Netačno na ovoj stranici da biste otkrili istinu o najboljem seksu, veličini kurca i bogatstvu. <br/> <br/>Budite oprezni, ova stranica može vam promijeniti život. U svakom slučaju, smisao toga shvatit će oni koji razmišljaju o budućnosti i žele poboljšati svoj život. ",
              button: "Da, spreman sam!"
            },
            quiz: {
              1: {
                question: {
                  title:
                    "Da li je tačno da je prosječna veličina penisa 6 inča?  ",
                  media: "img/slide1.jpg",
                  result: false
                },
                answer: {
                  title: "Lažno je!",
                  media: "img/slide1-1.jpg",
                  content:
                    "Većina muškaraca {GEO} obično ima 6,2-7 inča. Ako je manje onda ne brinite. Nema ništa lično. Majka priroda jednostavno ne favorizira sve. Međutim, to se može popraviti. "
                }
              },
              2: {
                question: {
                  title:
                    "Da li je tačno da 63% žena lažira orgazam kako bi zadovoljilo muškarca i njegov mali penis? ",
                  media: "img/slide2.jpg",
                  result: true
                },
                answer: {
                  title: "Da, istina je! ",
                  media: "img/slide2-1.jpg",
                  content:
                    'U julu 2019. britanski društveni naučnici proveli su studiju među ženama i otkrili da više od polovine žena lažira orgazam i bilo koji oblik užitka uopšte.O ovom istraživanju možete čitati na službenom mjestu Istraživačkog odjela u Velikoj Britaniji.<br/><br/>"Istina je da žene imaju određenu točku koja je odgovorna za zadovoljstvo. Međutim, samo penis od 7-9 inča može da ga dostigne. Naučnici su ga nazvali Točkom 11 u čast Mariana Rova (poznata dubina iznosi 11.000 km). <br/><br/>Kako se ispostavilo, sve žene sanjaju o velikom i dugom penisu koji će ući u njih dublje od Mariana Rova-a. Žele da ih njihov muškarac jako jebe. One žele da im čovjek svrši u lice. Ali u stvari sve što dobiju... To je nešto čega se stide... " '
                }
              },
              3: {
                question: {
                  title:
                    "Je li istina da samo vlasnici velikih penisa (7 inča i više) mogu u potpunosti uživati u seksu? ",
                  media: "img/slide3.jpg",
                  result: true
                },
                answer: {
                  title: "Da, to je istina! ",
                  media: "img/slide3-1.jpg",
                  content:
                    'Što je penis veći, to je jači osećaj užitka. Evolucija je dala snažnu erekciju i fantastične orgazme vlasnicima velikih veličina. Ohladite kičmu, otkucaje srca, hladnoću u stomaku, laganu vrtoglavicu... Jedan od učesnika ankete uporedio je taj osjećaj sa trenutkom kada sjednete u svoj novi Ferrari, upalite automobil i udarite u gas.  <br/><br/>Kada penis dođe do te tačke 11, dolazi do hemijske reakcije, kada se proizvode serotonin i endorfin. Dakle, obično muškarac sa penisom od 4 do 6 inča ne može ništa od toga da osjeti. " '
                }
              },
              4: {
                question: {
                  title:
                    "Da li je tačno da postoji integralni odnos između trajanja čina i veličine penisa?",
                  media: "img/slide4.jpg",
                  result: true
                },
                answer: {
                  title: "Da, to je istina..  ",
                  media: {
                    1: { media: "img/slide4-1.jpg" },
                    2: { media: "img/slide4-2.jpg" },
                    3: { media: "img/slide4-3.jpg" }
                  },
                  content:
                    "Internetska anketa na stranici Playboya intervjuirala je više od 100.000 muškaraca i podržala tu teoriju! <br/><br/>Pogledajte statistiku. <br/><br/>U stvari, samo velike veličine mogu imati duge seksualne činove. To je zbog činjenice da su veliki penisi znatno tvrđi i mogu sadržavati više. Ti momci imaju puno testosterona i ozbiljna jaja.  <br/><br/>Oni mogu jebati svoje kuje cijelu noć. Žene mogu samo glasno stenjati, gutati tonu sperme i željno sisati kurac svojih posjednika. Usput, takvi momci mogu kazniti tri djevojke odjednom.  "
                }
              },
              5: {
                question: {
                  title:
                    "li istina da čovjek sa penisom od 17 cm i više može imati impotenciju ranije od ostalih? ",
                  media: "img/slide5.jpg",
                  result: false
                },
                answer: {
                  title: "Ne, lažno je.",
                  media: "img/slide5-1.jpg",
                  content:
                    " Zapravo je suprotno. Biolozi iz cijelog svijeta istražuju ove pojave, međutim, materijal Wikipedije temeljen na istraživanjima podržava teoriju. <br/><br/>«Muškarci s penisima manjim od 15 cm osjetljivi su na prvi stupanj erektilne disfunkcije. To je zbog fizioloških i psiholoških karakteristika. Mali penis na kraju prestaje da proizvodi dovoljno kisika i krvi. Opće raspoloženje takođe ima uticaja: vlasnici malih veličina češće su skloni depresiji, tuzi i povlačenju. Štaviše, oni imaju tendenciju razvoja nekih mentalnih bolesti. »  <br/>  Izvještava Wikipediju. <br/><br/>Zaista, zašto biti tvrdi ako ste već patetični? "
                }
              },
              6: {
                question: {
                  title: "Je li istina da veličina kurca utječe na prihode?",
                  media: "img/slide6.jpg",
                  result: true
                },
                answer: {
                  title: "Nažalost, istina je.",
                  media: "img/slide6-1.jpg",
                  content:
                    " Novinari Forbesa proveli su studiju (nije objavljena zbog etičkih razloga). To je istraživanje šokiralo sve!   <br/><br/>Postoji integralna veza između uspjeha i veličine kurca. Većina modernih uspješnih muškaraca ima penis od 7 do 9 inča. I nema tu ništa posebno jer veliki penis daje povjerenje u vaše vlastite moći. Postoji želja da se jebe ne samo djevojka, već i cijeli svijet. <br/><br/>Двадцатка Форбс рассказывают о цифрах своих доходов, но помалкивает о цифрах собственных членов. Однако уже достоверно известно, что у Марка Цукеберга, Илона Маска, Билла Гейтса, Дональда Трампа размеры около 20 см. А вот с членом до 17 см нет ни одного человека в списке Forbes."
                }
              },
              7: {
                question: {
                  title: "Je li tačno da penis prestaje rasti nakon 18??",
                  media: "img/slide7.jpg",
                  result: true
                },
                answer: {
                  title: "Da, istina je!",
                  media: "img/slide7-1.jpg",
                  content:
                    "Prestaje rasti nakon 18. Međutim, njegova se veličina još uvijek može povećati. Dakle, čak i teških 3,7 inča mogu se okrenuti za 6-8 inča bez ikakvih operacija. "
                }
              },
              8: {
                question: {
                  title:
                    "Da li je tačno da neke kreme mogu promijeniti veličinu penisa?",
                  media: "img/slide8.jpg",
                  result: true
                },
                answer: {
                  title: "Da, istina je!",
                  media: "video/maral.mp4",
                  content:
                    "Živimo u 2020. Nauka i medicina se neprestano razvijaju, poboljšavaju sve sektore društva i pomažu u prevladavanju različitih pitanja.<br/><br/>Čak i sada postoje mnogi lijekovi koji vam mogu povećati penis za 2-6 inča. To vam može spasiti samopoštovanje, lični život, povećati prihode, uništiti rivale i u poslu i na poslu. <br/><br/>Svi ovi lijekovi imaju prirodnu i ekološku strukturu. Provjereno je od međunarodnog udruženja i dobilo je posebne sertifikate o kvalitetu. Posebno za vas, pripremili smo kompilaciju nekih lijekova koji pomažu u povećanju penisa:<br/>* Cream AA <br/> * Cream BB <br/>* Cream CC",
                  productSlider: true
                }
              },
              9: {
                question: {
                  title:
                    "Da li je tačno da se samo 3% muškaraca odlučuje za povećanje penisa?",
                  media: "img/slide9.jpg",
                  result: true
                },
                answer: {
                  title: "Da, istina je.",
                  media: "img/slide9-1.jpg",
                  content:
                    'Samo 3% muškaraca spremno je biti odgovorno za svoj život, umjesto da krive prirodu i sve druge. Samo 3% je spremno nešto promijeniti i djelovati. Samo su posebni ljudi sposobni nešto promijeniti! <br/><br/>" Znam puno muškaraca. 90% njih su slabići. Oni će patiti cijelog života. Živjeti u govnima. Biti zadovoljni kakvi jesu. Nikada neće ići sa klasičnom plavušom. Nikada neće zaraditi novac. I nikada neće živjeti svoj najbolji život. Oni su samo gubitnici. Oni su u redu s tim sranjem u svom ličnom životu, karijeri. I oni od toga žive. Oni su samo idioti i kukavice. "<br/>Rekao je Jason Statham u jednom svom intervjuu. '
                }
              },
              10: {
                question: {
                  title:
                    "Da li je tačno da 50% muškaraca sa velikim penisima dobiju to od rođenja??",
                  media: "img/slide10.jpg",
                  result: false
                },
                answer: {
                  title: "Ne, nije tačno ",
                  media: "img/slide10-1.jpg",
                  content:
                    "Samo šačica muškaraca od rođenja može imati veliki penis. U stvarnosti se više od polovine velikih penisa povećalo uz pomoć prirodnih krema. "
                }
              }
            },
            results: {
              options: [
                {
                  mask: {
                    from: 1,
                    to: 4
                  },
                  message1:
                    "Результат лучше чем у <strong>1%</strong> тестируемых",
                  message2: 'Да вы просто<br/> задрот!<img src="img/fire.png">',
                  message3:
                    'Поздравляем! Похоже, ты неплохо разбираешься в своей физиологии. Однако ты раскрыл еще не все секреты своего дружка.  <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                },
                {
                  mask: {
                    from: 5,
                    to: 7
                  },
                  message1:
                    "Результат лучше чем у <strong>50%</strong> тестируемых",
                  message2: 'Да вы просто<br/> кто-то!<img src="img/fire.png">',
                  message3:
                    'Вы средне справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                },
                {
                  mask: {
                    from: 8,
                    to: 10
                  },
                  message1:
                    "Результат лучше чем у <strong>87%</strong> тестируемых",
                  message2:
                    'Да вы просто<br/> эксперт!<img src="img/fire.png">',
                  message3:
                    'Вы отлично справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                }
              ]
            },
            productList: [
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream AA",
                price: "55$",
                linkTitle: "Shop now",
                url: "http://google.com"
              },
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream BA",
                price: "65$",
                linkTitle: "Shop now",
                url: "http://google.com"
              },
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream CA",
                price: "75$",
                linkTitle: "Shop now",
                url: "http://google.com"
              }
            ],
            form: {
              title:
                "Would you like to order a cream for penis enlargement and change your life?",
              labelName: "Ваше имя и фамилия",
              errNameRequired: "Name is required",
              maskPhone: "{+7} (000) 000-00-00",
              regionPrefix: "0",
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
              content:
                "В ближайшие 2 часа с вами свяжется наш оператор для оформления вашего заказа! Пожалуйста, ожидайте.",
              button: "На главную"
            }
          },
          bg: {
            common: { progressBar: "Question" },
            button: {
              true: "true",
              false: "false",
              next: "next",
              showResult: "show result"
            },
            intro: {
              title: "Правда или ложь?",
              media: "img/intro.jpg",
              content:
                "Изберете Вярно или Невярно на този саит, за да разберете исината за най-добрия секс, размер на пениса и парите. <br/> <br/>Внимавайте, този сайт може да промени живота ви. Смисълът му ще бъде разбран от онези, които мислят за бъдещето и искат да подобрят живота си. ",
              button: "Да, готов съм!"
            },
            quiz: {
              1: {
                question: {
                  title: "Вярно ли е, че средният размер на пениса е 15 см? ",
                  media: "img/slide1.jpg",
                  result: false
                },
                answer: {
                  title: "Не е вярно!",
                  media: "img/slide1-1.jpg",
                  content:
                    "Повечето от {GEO} мъжете обикновено са с 15-17 см. Ако е ви е по-малък, не се притеснявайте. Няма нищо лично. Майката природа просто не е надарила всички, но това може да се оправи. "
                }
              },
              2: {
                question: {
                  title:
                    "Вярно ли е, че 63% от жените имитират оргазъм, за да задоволят мъжа и малкия му пенис?  ",
                  media: "img/slide2.jpg",
                  result: true
                },
                answer: {
                  title: "Да, вярно е! ",
                  media: "img/slide2-1.jpg",
                  content:
                    "През юли 2019 г. британските социални учени са провели изследване сред жени и са открили, че повече от половината имитират оргазъм или каквото и да е удоволствие. Можете да прочетете за това изследване на официалния сайт на Изследователския отдел на Обединеното кралство.  <br/><br/>Истината е, че жените имат определена точка, кояйто е отговорна за удоволствието. Единствено пенис, който е от 17-22 см може да я достигне. Учените го нарекоха точка 11 в чест на Мариана Падина (известната падина, която е 11 000 км). <br/><br/>Както се оказва, всички жени мечтаят за голям и дълъг пенис, който ще им позволи да пронокнат по на дълбоко от Марианската Падина. Те искат техният мъж да ги чука силно. Те искат техният мъж да свърши на лицето им. Но всъщност всичко, което получават ... Това е нещо, от което се срамуват ...  "
                }
              },
              3: {
                question: {
                  title:
                    "Вярно ли е, че само мъжете с големи пениси (17 см и нагоре) могат напълно да се насладят на секса? ",
                  media: "img/slide3.jpg",
                  result: true
                },
                answer: {
                  title: "Да, това е вярно! ",
                  media: "img/slide3-1.jpg",
                  content:
                    "Колкото по-голям е пенисът, толкова по-силно е удоволствието. Еволюцията е дарила със силна ерекция и невероятни оргазми мъжете с голям размер. Тръпки по гръбнака, сърцебиене, гъделичкане в стомаха, лека замаяност ...  Един от участниците в проучването сравни това усещане с момента, в койтоседнете в новото си Ferrari, запалите колата и натиснете газта. <br/><br/>Когато пенисът стигне до тази точка 11, се случва химическа реакция, чрез която се освобождава серотонин и ендорфин. Така че обикновено човек с пенис от 10-15 см не може да почувства нищо. "
                }
              },
              4: {
                question: {
                  title:
                    "Вярно ли е, че има пряка връзка между продължителността на акта и размера на пениса?",
                  media: "img/slide4.jpg",
                  result: true
                },
                answer: {
                  title: "Да, вярно е. ",
                  media: {
                    1: { media: "img/slide4-1.jpg" },
                    2: { media: "img/slide4-2.jpg" },
                    3: { media: "img/slide4-3.jpg" }
                  },
                  content:
                    "Онлайн проучване на Playboy е интервюирало повече от 100 000 мъже и потвърди тази теория! <br/><br/>Вижте статистиката. <br/><br/>Всъщност само мъжете с голям размер могат да имат продължителни сексуални актове. Това се дължи на факта, че големите пениси са много по-твърди и могат да съдържат повече. Тези мъже имат много тестостерон и сериозни топки. <br/><br/>Те могат да чукат кучките си цяла нощ. Жените могат само силно да стенят, да поглъщат тонове сперма и нетърпеливо да смучат пениса на притежателя му. Между другото, такива мъже могат да наказват по три момичета наведнъж. "
                }
              },
              5: {
                question: {
                  title:
                    "Вярно ли е, че мъж с пенис, дълъг 17 см и повече може да стане импотентен по-рано от останалите?",
                  media: "img/slide5.jpg",
                  result: false
                },
                answer: {
                  title: "Не, не е вярно.",
                  media: "img/slide5-1.jpg",
                  content:
                    "Точно обратното. Биолози от целия ​​свят изследват този феномен, но материалът на Уикипедия, базиран на изследвания, подкрепя тази теория. <br/><br/>«Мъжете с пениси под 15 см са податливи към първия етап на еректилна дисфункция. Това се дължи на физиологичните и психологическите особености. Малкият пенис в крайна сметка спира да произвежда достатъчно кислород и кръв. Общото настроение също оказва влияние: тези мъже  са по-често склонни да бъдат депресирани, тъжни и изолирани. Освен това те имат склонност да развиват някои психични заболявания. »  <br/> Доклад в Уикипедия. <br/><br/>Защо да се мъчите да ви стане, ако вече сте жалки?"
                }
              },
              6: {
                question: {
                  title:
                    "Вярно ли е, че размерът на пениса влияе върху доходите?",
                  media: "img/slide6.jpg",
                  result: true
                },
                answer: {
                  title: "За съжаление е вярно.",
                  media: "img/slide6-1.jpg",
                  content:
                    "  Журналисти на Forbes проведоха изследване (не е било публикувано поради етичните причини). То шокира всички!    <br/><br/> То шокира всички! Съществува неразделна връзка между успеха и размера на пениса. Мнозинството от успешни мъже в днешно време са пениси около 17-22 см. И това не е учудващо, тъй като големият пенис дава увереност. Те имат желание да чукат не само някое момиче, но и целия свят.  <br/><br/>Forbes 20 разказва всичко за доходите им, но мълчи за размерите на пениса. Вече е известно, че Марк Зукърбърг, Елон Мъск, Бил Гейтс и Доналд Тръмп са с около 20 см. Между другото, във Forbes няма пенис по-малък от 15 см."
                }
              },
              7: {
                question: {
                  title: "Вярно ли е, че пенис спира да расте след 18?",
                  media: "img/slide7.jpg",
                  result: true
                },
                answer: {
                  title: "Да, вярно е! ",
                  media: "img/slide7-1.jpg",
                  content:
                    " Той спира да расте след 18. Въпреки това, размерът му все още може да бъде увеличен. Така че дори и 9 см могат да станат 15-20 см без никакви операции. "
                }
              },
              8: {
                question: {
                  title:
                    "Вярно ли е, че някои кремове могат да променят размера на пениса?",
                  media: "img/slide8.jpg",
                  result: true
                },
                answer: {
                  title: "Да, вярно е!",
                  media: "video/maral.mp4",
                  content:
                    "Годината е 2020 г. Науката и медицината се развиват непрекъснато, подобряват всички сектори на обществото и помагат за преодоляване на различните проблеми. <br/><br/>Вече има много лекарства, които могат да уголемят пениса с 6-15 см. Това може да полияе положително на самочувствието, личния живот, да увеличи доходите, да унищожи конкурентите ви както в бизнеса, така и в работата. <br/><br/>Всички тези лекарства имат естествена и екологична структура. Те са проверени от международните асоциации и са получили специални сертификати за качество. Специално за вас подготвихме компилация от някои лекарства, които помагат за уголемяване на пениса:<br/>* Cream AA <br/> * Cream BB <br/>* Cream CC",
                  productSlider: true
                }
              },
              9: {
                question: {
                  title:
                    "Вярно ли е, че само 3% от мъжете решават да уголемят пенисите си? ",
                  media: "img/slide9.jpg",
                  result: true
                },
                answer: {
                  title: "Да, истина е. ",
                  media: "img/slide9-1.jpg",
                  content:
                    'Само 3% от мъжете са готови да променят нещо в живота си, а не да обвиняват природата и всички останали. Само 3% са готови да действат. Само специалните хора могат да променят нещо!  <br/><br/>"" Познавам много мъже. 90% от тях са слаби. Те ще страдат цял ​​живот. Ще бъдат доволни от това, което имат. И те никога няма да плават с класна блондинка. Никога няма да печелят пари. И никога няма да живеят най-добрия си живот. Те са просто загубеняци. На тях им е добре да водят такъв личен живот и да имат такава кариера. И те се примиряват с това. Те са просто идиоти и страхливци. "<br/>Каза Джейсън Стейтъм в едно от интервю. '
                }
              },
              10: {
                question: {
                  title:
                    "Вярно ли е, че 50% от мъжете с големи пениси са така по рождение?",
                  media: "img/slide10.jpg",
                  result: false
                },
                answer: {
                  title: "Не, не е вярно. ",
                  media: "img/slide10-1.jpg",
                  content:
                    'Много малко мъже са родени така. В действителност повече от половината от големите пениси са били уголемени с помощта на натурални кремове. "'
                }
              }
            },
            results: {
              options: [
                {
                  mask: {
                    from: 1,
                    to: 4
                  },
                  message1:
                    "Результат лучше чем у <strong>1%</strong> тестируемых",
                  message2: 'Да вы просто<br/> задрот!<img src="img/fire.png">',
                  message3:
                    'Поздравляем! Похоже, ты неплохо разбираешься в своей физиологии. Однако ты раскрыл еще не все секреты своего дружка.  <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                },
                {
                  mask: {
                    from: 5,
                    to: 7
                  },
                  message1:
                    "Результат лучше чем у <strong>50%</strong> тестируемых",
                  message2: 'Да вы просто<br/> кто-то!<img src="img/fire.png">',
                  message3:
                    'Вы средне справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                },
                {
                  mask: {
                    from: 8,
                    to: 10
                  },
                  message1:
                    "Результат лучше чем у <strong>87%</strong> тестируемых",
                  message2:
                    'Да вы просто<br/> эксперт!<img src="img/fire.png">',
                  message3:
                    'Вы отлично справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                }
              ]
            },
            productList: [
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream AA",
                price: "55$",
                linkTitle: "Shop now",
                url: "http://google.com"
              },
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream BA",
                price: "65$",
                linkTitle: "Shop now",
                url: "http://google.com"
              },
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream CA",
                price: "75$",
                linkTitle: "Shop now",
                url: "http://google.com"
              }
            ],
            form: {
              title:
                "Would you like to order a cream for penis enlargement and change your life?",
              labelName: "Ваше имя и фамилия",
              errNameRequired: "Name is required",
              maskPhone: "{+7} (000) 000-00-00",
              regionPrefix: "0",
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
              content:
                "В ближайшие 2 часа с вами свяжется наш оператор для оформления вашего заказа! Пожалуйста, ожидайте.",
              button: "На главную"
            }
          },
          cz: {
            common: { progressBar: "Question" },
            button: {
              true: "true",
              false: "false",
              next: "next",
              showResult: "show result"
            },
            intro: {
              title: "Правда или ложь?",
              media: "img/intro.jpg",
              content:
                "Stisknutím Pravda nebo Lež na tomto webu odhalíte pravdu o nejlepším sexu, velikosti ptáka a bohatství. <br/> <br/>Buďte opatrní, tento web může změnit váš život. Jeho smysl však pochopí ti, kdo přemýšlejí o budoucnosti a chtějí zlepšit svůj život. ",
              button: "Ano, jsem připraven!"
            },
            quiz: {
              1: {
                question: {
                  title: "Je pravda, že průměrná velikost penisu je 6 palců?",
                  media: "img/slide1.jpg",
                  result: false
                },
                answer: {
                  title: "Je to lež! ",
                  media: "img/slide1-1.jpg",
                  content:
                    "Většina mužů {GEO} má obvykle 6,2 až 7 palců. Pokud máte méně, nebojte se. Není nic osobního. Matka příroda prostě nezvýhodňuje každého. Lze to však napravit. "
                }
              },
              2: {
                question: {
                  title:
                    "Je pravda, že 63 % žen předstírá orgasmus, aby uspokojilo muže a jeho malý penis?  ",
                  media: "img/slide2.jpg",
                  result: true
                },
                answer: {
                  title: "Ano, je to pravda! ",
                  media: "img/slide2-1.jpg",
                  content:
                    "V červenci 2019 provedli britští sociální vědci studii mezi ženami a zjistili, že více než polovina žen předstírá orgasmus a jakoukoli formu potěšení obecně... <br/><br/>Pravda je, že ženy mají určitý bod, který je zodpovědný za potěšení. Může jej však dosáhnout pouze penis o velikosti 7 až 9 palců. Vědci to nazvali Bod 11 na počest Mariánského příkopu (jeho známá hloubka je 11 000 km). <br/><br/>Jak se ukazuje, všechny ženy sní o velkém a dlouhém penisu, díky kterému budou hlubší než Mariánský příkop. Chtějí, aby jim jejich muž tvrdě šukal. Chtějí, aby se jejich muž udělal do jejich tváře. Ale ve skutečnosti všechno, co dostanou... Je to něco, za co se stydí...  "
                }
              },
              3: {
                question: {
                  title:
                    "Je pravda, že sex si mohou plně užívat pouze majitelé velkých penisů (7 palců a více)? ",
                  media: "img/slide3.jpg",
                  result: true
                },
                answer: {
                  title: "Ano, je to pravda! ",
                  media: "img/slide3-1.jpg",
                  content:
                    "Čím větší je penis, tím silnější pocit potěšení. Evoluce dala majitelům velkých velikostí silnou erekci a fantastické orgasmy. Mrazení páteře, bití srdce, motýlci v žaludku, závratě.... Jeden z účastníků průzkumu porovnal tento pocit s okamžikem, kdy si sednete do svého nového Ferrari, nastartujete auto a šlápnete na plyn.<br/><br/>Když penis dosáhne Bodu 11, dochází k chemické reakci, kdy se produkují serotoniny a endorfiny. Takže obvykle muž s penisem 4-6 palců nic z toho necítí. "
                }
              },
              4: {
                question: {
                  title:
                    "Je pravda, že existuje integrální vztah mezi dobou trvání sexu a velikostí penisu?",
                  media: "img/slide4.jpg",
                  result: true
                },
                answer: {
                  title: "Ano, je to pravda.",
                  media: {
                    1: { media: "img/slide4-1.jpg" },
                    2: { media: "img/slide4-2.jpg" },
                    3: { media: "img/slide4-3.jpg" }
                  },
                  content:
                    "Online průzkum na webu Playboy provedl rozhovor s více než 100 000 muži a tuto teorii podpořil! <br/><br/>Podívejte se na statistiku. <br/><br/>Dlouhé sexuální akty mohou mít ve skutečnosti pouze velké velikosti. Důvodem je skutečnost, že velké penisy jsou mnohem tvrdší a mohou pojmout více. Ti chlapi mají spoustu testosteronu a vážné koule. <br/><br/>Mohou šukat své kurvy celou noc. Ženy mohou jen hlasitě sténat, polykat tuny spermií a dychtivě sát péro svého majitele. Mimochodem, takoví chlapi mohou trestat tři dívky najednou."
                }
              },
              5: {
                question: {
                  title:
                    "Je pravda, že muž s penisem 17cm a více může mít impotenci dříve než ostatní?",
                  media: "img/slide5.jpg",
                  result: false
                },
                answer: {
                  title: "Ne, je to lež.",
                  media: "img/slide5-1.jpg",
                  content:
                    "Je to opak. Biologové z celého světa tento jev zkoumají, materiál z Wikipedie založený na výzkumech však teorii podporuje. <br/><br/>«Muži s penisy méně než 15 cm jsou náchylní k první fázi erektilní dysfunkce. Je to způsobeno fyziologickými a psychologickými rysy. Malý penis nakonec přestane produkovat dostatek kyslíku a krve. Vliv má také obecná nálada: majitelé malých velikostí jsou častěji nakloněni depresi, smutku a stažení se do sebe. Navíc mají sklon k rozvoji některých duševních chorob.»  <br/> Zprávy z Wikipedie. <br/><br/>Opravdu, proč ztvrdnout, pokud už jste ubohý?"
                }
              },
              6: {
                question: {
                  title: "Je pravda, že velikost ptáka ovlivňuje příjmy?",
                  media: "img/slide6.jpg",
                  result: true
                },
                answer: {
                  title: "Bohužel je to pravda.",
                  media: "img/slide6-1.jpg",
                  content:
                    " Novináři z Forbesu provedli studii (nebyla zveřejněna kvůli etickým důvodům). Tento výzkum šokoval každého!   <br/><br/> Mezi úspěchem a velikostí ptáka je integrální vztah. Většina moderních úspěšných mužů má penis 7-9 palců. A není nic zvláštního, protože velký penis dává důvěru ve vaše vlastní síly. Je tu touha šukat nejen dívku, ale celý svět.  <br/><br/>Forbes 20 říká všechno o svých příjmech, ale mlčí o jejich velikosti penisu. Je však již známo, že Mark Zuckerberg, Elon Musk, Bill Gates a Donald Trump mají velikost přibližně 8 palců. Mimochodem, ve Forbesu není žádný penis menší než 6 palců."
                }
              },
              7: {
                question: {
                  title: "Je pravda, že penis přestane růst po 18 letech?",
                  media: "img/slide7.jpg",
                  result: true
                },
                answer: {
                  title: "Jo, je to pravda! ",
                  media: "img/slide7-1.jpg",
                  content:
                    " Po 18 letech přestane růst. Jeho velikost však lze stále zvětšit. Takže i tvrdých 3,7 palce se mohou zvětšit na 6 až 8 palců bez jakýchkoli operací. "
                }
              },
              8: {
                question: {
                  title:
                    "Je pravda, že některé krémy mohou měnit velikost penisu?",
                  media: "img/slide8.jpg",
                  result: true
                },
                answer: {
                  title: "Jo, je to pravda!",
                  media: "video/maral.mp4",
                  content:
                    "Žijeme v roce 2020. Věda a lékařství se neustále vyvíjejí, zlepšují všechna odvětví společnosti a pomáhají překonávat různé problémy. <br/><br/>I dnes existuje mnoho léků, které mohou zvětšit váš penis o 2-6 palců. Může zachránit vaši sebevědomí, osobní život, zvýšit příjem, zničit soupeře v podnikání i v práci. <br/><br/>Všechny tyto léky mají přirozenou a ekologickou strukturu. Byl zkontrolován mezinárodními asociacemi a získal zvláštní certifikáty kvality. Speciálně pro vás jsme připravili kompilaci některých léků, které pomáhají zvětšit penis:<br/>* Cream AA <br/> * Cream BB <br/>* Cream CC",
                  productSlider: true
                }
              },
              9: {
                question: {
                  title:
                    "Je pravda, že pouze 3 % mužů se rozhodla rozšířit své penisy? ",
                  media: "img/slide9.jpg",
                  result: true
                },
                answer: {
                  title: "Jo, je to pravda.",
                  media: "img/slide9-1.jpg",
                  content:
                    "Pouze 3 % mužů jsou připraveni nést odpovědnost za své životy, namísto obviňování přírody a všech ostatních. Pouze 3 % jsou připraveni něco změnit a jednat. Pouze speciální lidé jsou schopni něco změnit!  <br/><br/>„Znám spoustu mužů. 90 % z nich jsou slabí. Budou trpět po celý život. Žít ve sračkách. Nebudou spokojení. Nikdy se nebudou plavit s prima blondýnkami. Nikdy nebudou vydělávat peníze. A nikdy nebudou žít svůj nejlepší život. Jsou to jen poražení. Jsou v pořádku s tímto v jejich osobním životě, kariéře. A žijí s tím. Jsou to jen idioti a zbabělci.“<br/>Řekl Jason Statham v jednom ze svých rozhovorů."
                }
              },
              10: {
                question: {
                  title:
                    "Je pravda, že 50 % mužů s velkými penisy to získalo od narození?",
                  media: "img/slide10.jpg",
                  result: false
                },
                answer: {
                  title: "Ne, není to pravda. ",
                  media: "img/slide10-1.jpg",
                  content:
                    'Jen hrstka mužů může mít velký penis od narození. Ve skutečnosti více než polovina velkých penisů byla rozšířena pomocí přírodních krémů. "'
                }
              }
            },
            results: {
              options: [
                {
                  mask: {
                    from: 1,
                    to: 4
                  },
                  message1:
                    "Результат лучше чем у <strong>1%</strong> тестируемых",
                  message2: 'Да вы просто<br/> задрот!<img src="img/fire.png">',
                  message3:
                    'Поздравляем! Похоже, ты неплохо разбираешься в своей физиологии. Однако ты раскрыл еще не все секреты своего дружка.  <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                },
                {
                  mask: {
                    from: 5,
                    to: 7
                  },
                  message1:
                    "Результат лучше чем у <strong>50%</strong> тестируемых",
                  message2: 'Да вы просто<br/> кто-то!<img src="img/fire.png">',
                  message3:
                    'Вы средне справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                },
                {
                  mask: {
                    from: 8,
                    to: 10
                  },
                  message1:
                    "Результат лучше чем у <strong>87%</strong> тестируемых",
                  message2:
                    'Да вы просто<br/> эксперт!<img src="img/fire.png">',
                  message3:
                    'Вы отлично справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                }
              ]
            },
            productList: [
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream AA",
                price: "55$",
                linkTitle: "Shop now",
                url: "http://google.com"
              },
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream BA",
                price: "65$",
                linkTitle: "Shop now",
                url: "http://google.com"
              },
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream CA",
                price: "75$",
                linkTitle: "Shop now",
                url: "http://google.com"
              }
            ],
            form: {
              title:
                "Would you like to order a cream for penis enlargement and change your life?",
              labelName: "Ваше имя и фамилия",
              errNameRequired: "Name is required",
              maskPhone: "{+7} (000) 000-00-00",
              regionPrefix: "0",
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
              content:
                "В ближайшие 2 часа с вами свяжется наш оператор для оформления вашего заказа! Пожалуйста, ожидайте.",
              button: "На главную"
            }
          },
          sk: {
            common: { progressBar: "Question" },
            button: {
              true: "true",
              false: "false",
              next: "next",
              showResult: "show result"
            },
            intro: {
              title: "Правда или ложь?",
              media: "img/intro.jpg",
              content:
                "Stlačením Pravda alebo Lož na tomto webe odhalíte pravdu o najlepšom sexe, veľkosti vtáka a bohatstve. <br/> <br/>Buďte opatrní, tento web môže zmeniť váš život. Jeho zmysel však pochopia tí, ktorí premýšľajú o budúcnosti a chcú zlepšiť svoj život. ",
              button: "Áno, som pripravený!"
            },
            quiz: {
              1: {
                question: {
                  title: "Je pravda, že priemerná veľkosť penisu je 6 palcov?",
                  media: "img/slide1.jpg",
                  result: false
                },
                answer: {
                  title: "Je to lož!",
                  media: "img/slide1-1.jpg",
                  content:
                    "Väčšina mužov {GEO} má obvykle 6,2 až 7 palcov. Ak máte menej, nebojte sa. Nie je nič osobné. Matka príroda jednoducho nezvýhodňuje každého. Možno to však napraviť. "
                }
              },
              2: {
                question: {
                  title:
                    "Je pravda, že 63 % žien predstiera orgazmus, aby uspokojilo muža a jeho malý penis?  ",
                  media: "img/slide2.jpg",
                  result: true
                },
                answer: {
                  title: "Áno, je to pravda! ",
                  media: "img/slide2-1.jpg",
                  content:
                    " V júli 2019 vykonali britskí sociálni vedci štúdiu medzi ženami a zistili, že viac ako polovica žien predstiera orgazmus a akúkoľvek formu potešenie všeobecne ... <br/><br/>Pravda je, že ženy majú určitý bod, ktorý je zodpovedný za potešenie. Môže ho však dosiahnuť len penis s veľkosťou 7 až 9 palcov. Vedci to nazvali Bod 11 na počesť Mariánskej priekopy (jej známa hĺbka je 11 000 km). <br/><br/>Ako sa ukazuje, všetky ženy snívajú o veľkom a dlhom penisu, vďaka ktorému budú hlbšie ako Mariánska priekopa. Chcú, aby im ich muž tvrdo šukal. Chcú, aby sa ich muž urobil do ich tváre. Ale v skutočnosti všetko, čo dostanú ... Je to niečo, za čo sa hanbia ..."
                }
              },
              3: {
                question: {
                  title:
                    "Je pravda, že sex si môžu plne užívať len majitelia veľkých penisov (7 palcov a viac)? ",
                  media: "img/slide3.jpg",
                  result: true
                },
                answer: {
                  title: "Áno, je to pravda! ",
                  media: "img/slide3-1.jpg",
                  content:
                    "Čím väčší je penis, tým silnejší je pocit potešenia. Evolúcia dala majiteľom veľkých veľkostí silnú erekciu a fantastické orgazmy. Mrazenie chrbtice, bitie srdca, motýle v žalúdku, závraty ... Jeden z účastníkov prieskumu porovnal tento pocit s okamihom, keď si sadnete do svojho nového Ferrari, naštartujete auto a šliapnete na plyn.\nJeden z účastníkov prieskumu porovnal tento pocit s okamihom, keď si sadnete do svojho nového Ferrari, naštartujete auto a šliapnete na plyn.<br/><br/>Keď penis dosiahne Bodu 11, dochádza k chemickej reakcii, kedy sa produkujú serotonín a endorfíny. Takže zvyčajne muž s penisom 4-6 palcov nič z toho necíti. "
                }
              },
              4: {
                question: {
                  title:
                    "Je pravda, že existuje integrálny vzťah medzi dĺžkou trvania sexu a veľkosťou penisu?",
                  media: "img/slide4.jpg",
                  result: true
                },
                answer: {
                  title: "Ano, je to pravda.",
                  media: {
                    1: { media: "img/slide4-1.jpg" },
                    2: { media: "img/slide4-2.jpg" },
                    3: { media: "img/slide4-3.jpg" }
                  },
                  content:
                    "Online prieskum na webe Playboy vykonal rozhovor s viac ako 100 000 mužmi a túto teóriu podporil! <br/><br/>Pozrite sa na štatistiku. <br/><br/>Dlhé sexuálne akty môžu mať v skutočnosti len veľké veľkosti. Dôvodom je skutočnosť, že veľké penisy sú oveľa tvrdšie a môžu pojať viac. Tí chlapi majú veľa testosterónu a vážne gule. <br/><br/>Môžu šukať svoje kurvy celú noc. Ženy môžu len hlasno stonať, prehĺtať tony spermií a dychtivo sať penis svojho majiteľa. Mimochodom, takí chlapi môžu trestať tri dievčatá naraz."
                }
              },
              5: {
                question: {
                  title:
                    "Je pravda, že muž s penisom 17cm a viac môže mať impotenciu skôr ako ostatní?",
                  media: "img/slide5.jpg",
                  result: false
                },
                answer: {
                  title: "Nie, je to lož.",
                  media: "img/slide5-1.jpg",
                  content:
                    "Je to opak. Biológovia z celého sveta tento jav skúmajú, materiál z Wikipédie založený na výskumoch však teóriu podporuje. <br/><br/>«Muži s penismi menej ako 15 cm sú náchylní k prvej fáze erektilnej dysfunkcie. Je to spôsobené fyziologickými a psychologickými rysmi. Malý penis nakoniec prestane produkovať dostatok kyslíka a krvi. Vplyv má tiež všeobecná nálada: majitelia malých veľkostí sú častejšie naklonení depresii, smútku a stiahnutie sa do seba. Navyše majú sklon k rozvoju niektorých duševných chorôb.»  <br/> Správy z Wikipédie. <br/><br/>Naozaj, prečo stvrdnúť, ak už ste úbohý?"
                }
              },
              6: {
                question: {
                  title: "Je pravda, že veľkosť vtáka ovplyvňuje príjmy?",
                  media: "img/slide6.jpg",
                  result: true
                },
                answer: {
                  title: "Bohužiaľ je to pravda.",
                  media: "img/slide6-1.jpg",
                  content:
                    "Novinári z Forbes vykonali štúdiu (nebola zverejnená kvôli etickým dôvodom). Tento výskum šokoval každého!   <br/><br/> Medzi úspechom a veľkostí vtáka je integrálnou vzťah. Väčšina moderných úspešných mužov má penis 7-9 palcov. A nie je nič zvláštne, pretože veľký penis dáva dôveru vo vaše vlastné sily. Je tu túžba šukať nielen dievča, ale celý svet.  <br/><br/>Forbes 20 hovorí všetko o svojich príjmoch, ale mlčí o ich veľkosti penisu. Je však už známe, že Mark Zuckerberg, Elon Musk, Bill Gates a Donald Trump majú veľkosť približne 8 palcov. Mimochodom, vo Forbes nie je žiadny penis menší ako 6 palcov."
                }
              },
              7: {
                question: {
                  title: "Je pravda, že penis prestane rásť po 18 rokoch?",
                  media: "img/slide7.jpg",
                  result: true
                },
                answer: {
                  title: "Hej, je to pravda! ",
                  media: "img/slide7-1.jpg",
                  content:
                    "Po 18 rokoch prestane rásť. Jeho veľkosť však možno stále zväčšiť. Takže aj tvrdých 3,7 palca sa môžu zväčšiť na 6 až 8 palcov bez akýchkoľvek operácií. "
                }
              },
              8: {
                question: {
                  title:
                    "Je pravda, že niektoré krémy môžu meniť veľkosť penisu?",
                  media: "img/slide8.jpg",
                  result: true
                },
                answer: {
                  title: "Hej, je to pravda!",
                  media: "video/maral.mp4",
                  content:
                    "Žijeme v roku 2020. Veda a lekárstvo sa neustále vyvíjajú, zlepšujú všetky odvetvia spoločnosti a pomáhajú prekonávať rôzne problémy. <br/><br/>Aj dnes existuje mnoho liekov, ktoré môžu zväčšiť váš penis o 2-6 palcov. Môže zachrániť vašu sebavedomie, osobný život, zvýšiť príjem, zničiť súpera v podnikaní aj v práci. <br/><br/>Všetky tieto lieky majú prirodzenú a ekologickú štruktúru. Bol skontrolovaný medzinárodnými združeniami a získal zvláštne certifikáty kvality. Špeciálne pre vás sme pripravili kompiláciu niektorých liekov, ktoré pomáhajú zväčšiť penis:<br/>* Cream AA <br/> * Cream BB <br/>* Cream CC",
                  productSlider: true
                }
              },
              9: {
                question: {
                  title:
                    "Je pravda, že iba 3 % mužov sa rozhodli rozšíriť svoje penisy?",
                  media: "img/slide9.jpg",
                  result: true
                },
                answer: {
                  title: "Hej, je to pravda.",
                  media: "img/slide9-1.jpg",
                  content:
                    "Iba 3 % mužov sú pripravení niesť zodpovednosť za svoje životy, namiesto obviňovania prírody a všetkých ostatných. Iba 3 % sú pripravení niečo zmeniť a konať. Iba špeciálni ľudia sú schopní niečo zmeniť!  <br/><br/>„Poznám veľa mužov. 90 % z nich sú slabí. Budú trpieť po celý život. Žiť vo sračkách. Nebudú spokojní. Nikdy sa nebudú plaviť s príma blondínkami. Nikdy nebudú zarábať peniaze. A nikdy nebudú žiť svoj najlepší život. Sú to len porazení. Sú v poriadku s týmto v ich osobnom živote, kariére. A žijú s tým. Sú to len idioti a zbabelci.“<br/>Povedal Jason Statham v jednom zo svojich rozhovorov."
                }
              },
              10: {
                question: {
                  title:
                    "Je pravda, že 50 % mužov s veľkými penismi to získalo od narodenia?",
                  media: "img/slide10.jpg",
                  result: false
                },
                answer: {
                  title: "Nie, nie je to pravda.",
                  media: "img/slide10-1.jpg",
                  content:
                    "Len hŕstka mužov môže mať veľký penis od narodenia. V skutočnosti viac ako polovica veľkých penisov bola rozšírená pomocou prírodných krémov. "
                }
              }
            },
            results: {
              options: [
                {
                  mask: {
                    from: 1,
                    to: 4
                  },
                  message1:
                    "Результат лучше чем у <strong>1%</strong> тестируемых",
                  message2: 'Да вы просто<br/> задрот!<img src="img/fire.png">',
                  message3:
                    'Поздравляем! Похоже, ты неплохо разбираешься в своей физиологии. Однако ты раскрыл еще не все секреты своего дружка.  <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                },
                {
                  mask: {
                    from: 5,
                    to: 7
                  },
                  message1:
                    "Результат лучше чем у <strong>50%</strong> тестируемых",
                  message2: 'Да вы просто<br/> кто-то!<img src="img/fire.png">',
                  message3:
                    'Вы средне справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                },
                {
                  mask: {
                    from: 8,
                    to: 10
                  },
                  message1:
                    "Результат лучше чем у <strong>87%</strong> тестируемых",
                  message2:
                    'Да вы просто<br/> эксперт!<img src="img/fire.png">',
                  message3:
                    'Вы отлично справились с тестом и показали себя настоящим экспертом в правилах соблюдения диет! <br/> <br/> За такой результат вам полагается награда - <span class="text-danger">скидка 50%</span> на наши новые супер таблетки для похудения'
                }
              ]
            },
            productList: [
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream AA",
                price: "55$",
                linkTitle: "Shop now",
                url: "http://google.com"
              },
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream BA",
                price: "65$",
                linkTitle: "Shop now",
                url: "http://google.com"
              },
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream CA",
                price: "75$",
                linkTitle: "Shop now",
                url: "http://google.com"
              }
            ],
            form: {
              title:
                "Would you like to order a cream for penis enlargement and change your life?",
              labelName: "Ваше имя и фамилия",
              errNameRequired: "Name is required",
              maskPhone: "{+7} (000) 000-00-00",
              regionPrefix: "0",
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
              content:
                "В ближайшие 2 часа с вами свяжется наш оператор для оформления вашего заказа! Пожалуйста, ожидайте.",
              button: "На главную"
            }
          },
          ge: {
            common: { progressBar: "Question" },
            button: {
              true: "true",
              false: "false",
              next: "next",
              showResult: "show result"
            },
            intro: {
              title: "Правда или ложь?",
              media: "img/intro.jpg",
              content:
                "დააწექით მართალიას ან ტყუილიას ამ საიტზე, რომ გამოააშკარაოთ სიმართლე საუკეთესო სექსზე, პენისის ზომაზე და სიმდიდრეზე. <br/> <br/>ფრთხილად იყავით, ამ საიტს შეუძლია შეცვალოს თქვენი ცხოვრება. ამ ყველაფერს ისინი გაიგებენ ვისაც სურთ, რომ გაიუმჯობესონ ჯანმრთელობა და რომლებიც ფიქრობენ მომავალზე.",
              button: "დიახ, მე მზად ვარ!"
            },
            quiz: {
              1: {
                question: {
                  title:
                    "მართალია თუ არა, რომ საშუალო პენისის ზომა 15 სანტიმეტრია?",
                  media: "img/slide1.jpg",
                  result: false
                },
                answer: {
                  title: "ეს ტყუილია! ",
                  media: "img/slide1-1.jpg",
                  content:
                    "მამაკაცების უმეტესობას აქვს 16-18 სანტიმეტრი . თუ თქვენი პენისის ზომა ამაზე ნაკლებია არ ინერვიულოთ. არაფერია სანერვიულო. ბუნება ყველას არ აჯილდოვებს, მაგრამ ამის შეცვლა შესაძლებელია. "
                }
              },
              2: {
                question: {
                  title:
                    "Jმართალია თუ არა, რომ ქალების 63%  თავს იკატუნებს, ვითომ ორგაზმს განიცდიან, რათა დააკმაყოფილონ პატარა პენისის მქონე მამაკაცი? ",
                  media: "img/slide2.jpg",
                  result: true
                },
                answer: {
                  title: "დიახ, ეს მართალია!",
                  media: "img/slide2-1.jpg",
                  content:
                    "ბრიტანელმა სოციალ-მეცნიერებმა ჩაატარეს კვლევები ქალებში და აღმოაჩინეს, რომ ქალების ნახევარი თავს იკატუნებს, ვითომ ორგაზმს განიცდიან. შენ შეგიძლია წაიკითხო ამ გამოკვლევის შესახებ ოფიციალურ საიტზე Research Deparment of UKზე. <br/><br/>ქალებს აქვთ გარკვეული ადგილი, რომელიც სიამოვნების შეგრძნების წყაროა. მაგრამ ამ ადგილისთვის მიღწევა მხოლოდ 18-22 სანტიმეტრიან პენისს შეუძლია. მეცნიერები ამ ადგილს ეძახიან ადგილ 11ს, მარიანას ღრმულის საპატივცემულოდ (მისი სიღმრე 11.000 კილომეტრამდეა) <br/><br/>როგორც ჩანს, ყველა ქალბატონი ოცნებობს გრძელ და სქელ პენისზე, რომელიც მარიანას ღრმულსაც ჩააღწევს. მათ სურთ რომ თავიანთმა პარტნიორმა მაგრად გაჟიმონ, სახეზე დააწუწონ. მაგრამ ერთადერთ რამ რასაც ისინი იღებენ... არის ის, რისიც ძალიან რცხვენიათ."
                }
              },
              3: {
                question: {
                  title:
                    "მართალია თუ არა, რომ მხოლოდ დიდი პენისის მქონე ადამიანებს (18 სანტიმეტრის ზემოთ) შეუძლიათ სექსით სრულიად სიამოვნება? ",
                  media: "img/slide3.jpg",
                  result: true
                },
                answer: {
                  title: "დიახ, ეს მართალია!",
                  media: "img/slide3-1.jpg",
                  content:
                    "რაც უფრო დიდია პენისი, მით უფრო დიდია შეგრძნება და სიამოვნება. დიდი პენისის მქონე ადამიანებს აქვთ ძლიერი ერექცია და საუკეთესო ორგაზმი. ასევე დაწყნარებული ხერხემალი, გულის ცემა.<br/>ერთ-ერთმა გამოკვლევის მონაწილემ ეს შეგრძნება შეადარა იმ მომენტს, როდესაც შენს ახალ ფერარის მარკის მანქანაში ჩაჯდები, ჩართავ მანქანას და მიაჭერ გაზს.<br/>როდესაც პენისი მიაღწევს ზემოთ ნახსენებ ადგილ 11ს, ამ დროს ქიმიური რეაქცია ხდება, როდესაც სეროტინი და ენდორფინი წარმოიქმნება. ანუ, მამაკაცი, რომელსაც 10-15 სანტიმეტრიანი პენისი აქვს ასეთ რამეს ვერ იგრძნობს. "
                }
              },
              4: {
                question: {
                  title:
                    "მართალია თუ არა, რომ პენისის ზომა და სექსის ხანგრძლივობა ერთმანეთში კავშირში არიან?",
                  media: "img/slide4.jpg",
                  result: true
                },
                answer: {
                  title: "ი, მართალია.",
                  media: {
                    1: { media: "img/slide4-1.jpg" },
                    2: { media: "img/slide4-2.jpg" },
                    3: { media: "img/slide4-3.jpg" }
                  },
                  content:
                    "ონლაინ გამოკითხვამ ფლეიბოის საიტზე გამოკითხა ასი ათასზე მეტი მამაკაცი და ის ემხრობა ამ თეორიას!  <br/><br/>შეხედეთ სტატისტიკას. <br/><br/>რომ იცოდეთ, მხოლოდ დიდი ზომის მქონე მამაკაცებს შეუძლიათ დიდხნიანი სექსის ქონა. ამას კი ის ფაქტი მოწმობს, რომ დიდი პენისები უფრო გამძლეები არიან და იტევენ მეტ სპერმას. ასეთ კაცებს აქვთ უამრავი ტესტოსტერონი და სერიოზული კვერცხები. <br/><br/>მათ შეუზლიათ თავიანთი ბოზები იხმარონ მთელი ღამის განმავლობაში. ქალებს კი მხოლოდ ხმამაღლა კვნესა, ტონობით სპერმის გადაყლაპვა და გახამებულად ყლის წოვა შეუძლიათ."
                }
              },
              5: {
                question: {
                  title:
                    "მართალია თუ არა, რომ კაცებს, რომლებსაც 17 სანტიმეტრი ან უფრო გრძელი პენისი აქვთ სხვებთან შედარებით უფრო ადრე შეიძლება გახდნენ იმპოტენტები?",
                  media: "img/slide5.jpg",
                  result: false
                },
                answer: {
                  title: "არა, ტყუილია.",
                  media: "img/slide5-1.jpg",
                  content:
                    "პირიქითაა. ბიოლოგები. მთელი დედამიწის ადგილებიდან იკვლევენ ამ ფენომენს, ასევე ვიკიპედიის წყაროები, რომლებიც დაფუძნებულია უამრავ გამოკლევებზე, ემხრობა ამ თეორიას. <br/><br/><<კაცები, რომლის ზომაც 15 სანტიმეტრს არ აღემატება, არიან მთავარი მსხვერპლები პირველი სტადიის ერექციული დისფუნქციის. ეს ასე ფიზიკური და ფსიქოლოგიური თვისებების გამოა. პატარა პენისი დროთა განმავლობაში წყვეტს ოქსიგენის და სისხლის გამოყოფას. საერთო ხასიათსაც ასევე აქვს გავლენა: პატარა პენისის პატრონები უფრო ხშირად არიან მოწყენილები და დეპრესიაში ჩავარდნილები. ამის გამო, მათ აქვთ უფრო დიდი ტენდენცია რომ ჩამოუყალიბდეთ გონებრივი დაავადება.>>  <br/> მბობს ვიკიპედია. "
                }
              },
              6: {
                question: {
                  title:
                    "მართალია, რომ პენისის ზომა გავლენას ახდენს შემოსავალზე?",
                  media: "img/slide6.jpg",
                  result: true
                },
                answer: {
                  title: "სამწუხაროდ მართალია.",
                  media: "img/slide6-1.jpg",
                  content:
                    " ფორბეს ჟურნალისებმა ჩაატარეს კვლევა (რომელიც არ გამოქვეყნდა ეთიკური მიზეზების გამო). ამ გამოკვლევამ ყველა გააოგნა!   <br/><br/> ყლის ზომასა და წარმატებას შორის დიდი კავშირია. თანამედროვე წარმატებული კაცების უმეტესობას აქვს 18-22 სანტიმეტრი, რადგან დიდი პენისის ზომა კაცს მატებს თავის ძალებში თავდაჯერებულობას და უჩნდება სურვილი, რომ გოგოს გარდა ასევე მთელი დედამიწა იხმაროს.  <br/><br/>ფორბესის გამოკვლევები წარმატებულ ხალზე აჩვენებს ყველაფერს მათ შემოსავალთან დაკავშირებით, მაგრამ ჩუმად არიან მათ პენისის ზომებზე. ამის მიუხედავათ, უკვე ცნობილია, რომ მარკ ცუკერბერგს, ილონ მასკს, ბილ გეითს და დონალდ ტრამპს აქვთ დაახლოებით 20 სანტიმეტრიანი პენისები."
                }
              },
              7: {
                question: {
                  title: "მართალია, რომ პენისი წყვეტს ზრდას 18 წლის შემდეგ?",
                  media: "img/slide7.jpg",
                  result: true
                },
                answer: {
                  title: "დიახ, მართალია! ",
                  media: "img/slide7-1.jpg",
                  content:
                    "ის წყვეტს ზრდას 18 წლის შემდეგ, მაგრამ მაინც შესაძლებელია მისი გაზრდა ხელოვნურად. ამგვარად, 8-17 სანტიმეტრიანიც კი შეიძლება გადაიქცეს 15-20ად, ყველანაირი ოპერაციების გარეშე. "
                }
              },
              8: {
                question: {
                  title:
                    "მართალია, რომ ზოგ კრემს შეუძლია პენისის ზომის შეცვლა?",
                  media: "img/slide8.jpg",
                  result: true
                },
                answer: {
                  title: "დიახ, მართალია!",
                  media: "video/maral.mp4",
                  content:
                    "ჩვენ ვცხოვრობთ 2020 წელში. მეცნიერება და მედიცინა ყოველთვის უკეთესდება, ეხმარება საზოგადოებას დაამარცხოს სხვადასხვაგვარი პრობლემები. <br/><br/>ეხლაც ბევრი მედიკამენტია, რომლებსაც შეუძლიათ თქვენი 5-15 სანტიმეტრიანი პენისის გაზრდა. მას შეუძლია გადაარჩინოს თქვენი თვით-შეფასება, პირადი ცხოვრება, გაზარდოს თქვენი შემოსავალი, გაანადგუროს მოწინააღმდეგეები, ბიზნესშიც და სამსახურშიც. <br/><br/>ყველა ამ მედიკამენტს აქვს ნატურალური და ეკოლოგიური სტრუქტურა. შემოწმებულნი არიან ინტერნაციონალური ასოციაციის მიერ და აქვთ მიღებული სპეციალური სერთიფიკატები. სპეციალურად თქვენთვის ჩვენ მოვამზადეთ რამდენიმე მედიკამენტის ჩამონათვალი, რაც დაგეხმარებათ პენისის გაზრდაში:<br/>* Cream AA <br/> * Cream BB <br/>* Cream CC",
                  productSlider: true
                }
              },
              9: {
                question: {
                  title:
                    "მართალია, რომ კაცების მხოლოდ 3% წყვეტს რომ გაიდიდოს პენისი?",
                  media: "img/slide9.jpg",
                  result: true
                },
                answer: {
                  title: "კი, მართალია.",
                  media: "img/slide9-1.jpg",
                  content:
                    "კაცების მხოლოდ 3% არის მზად რომ იყვნენ თავიანთი ცხოვრებისთვის პასუხისმგებლები, იმის ნაცვლად რომ ბუნებას და სხვა რაღაცეებს დააბრალონ. მხოლოდ 3% არის მზად, რომ შეცვალოს რამე და იმოქმედოს. მხოლოდ სპეციალური ხალხია მზად რომ რამე შეცვალოს! <br/><br/>“მე ვიცნობ ბევრ კაცს. მათგან კი 90% სუსტია. ისინი დაიტანჯებიან მთელი ცხოვრება. ცხოვრება ყლეობაა. ისინი ვერასდროს წავლენ იახტაზე ქერათმიან გოგონასთან ერთად. ისინი ვერასდროს იშოვიან ფულს და ვერასდროს იცხოვრებენ საუკეთესო ცხოვრებით. ისინი უბრალოდ უიღბლო ლუზერები არიან და ამ ყველაფერს ეგუებიან. ისინი არიან იდიოტები და ლაჩრები.“<br/>თქვა ჯეისონ სტეტჰემმა ერთ-ერთ ინტერვიუში."
                }
              },
              10: {
                question: {
                  title:
                    "მართალია, რომ კაცების 50%, რომლებსაც დიდი პენისები აქვთ დაბადებიდანვე მოყვათ?",
                  media: "img/slide10.jpg",
                  result: false
                },
                answer: {
                  title: "Nie, nie je to pravda.",
                  media: "img/slide10-1.jpg",
                  content:
                    "*тут нет перевода на грузинский*Len hŕstka mužov môže mať veľký penis od narodenia. V skutočnosti viac ako polovica veľkých penisov bola rozšírená pomocou prírodných krémov. "
                }
              }
            },
            results: {
              options: [
                {
                  mask: {
                    from: 1,
                    to: 4
                  },
                  message1:
                    "Результат лучше чем у <strong>1%</strong> тестируемых",
                  message2: 'გილოცავთ! <img src="img/fire.png">',
                  message3:
                    "ჩვენ იმედი გვაქვს, რომ ეს ტესტი დაგეხმარათ გამოგეაშკარავებინათ ახალი ფაქტები მამაკაცის ფიზიოლოგიზე და ვიმედოვნებთ, რომ ჩვენ რჩევებს ბრძნულად გამოიყენებთ.<br/> გინდათ რომ შეწყვიტოთ თავის შეურაწყოფილად გრძნობა? გინდათ რომ გაიგოთ როგორია ნამდვილი სექსი და ორგაზმი? მაშინ დროა შეწყვიტოთ წუწუნი. გაბედე მოქმედება! შეუკვეთე მარალ გელი და იყავი შენი ცხოვრების კონტროლში.<br/> ჩვენ გვაქვს ფასდაკლება მხოლოდ შენთვის ლეგენდარულ მარალ გელზე, რასაც შეუძლია გაგიზარდოს პენისი 5-15 სანტიმეტრით."
                },
                {
                  mask: {
                    from: 5,
                    to: 7
                  },
                  message1:
                    "Результат лучше чем у <strong>50%</strong> тестируемых",
                  message2:
                    'თქვენ ნამდვილად გაკლიათ ინფორმაციულობა. არაუშავს! <img src="img/fire.png">',
                  message3:
                    "ჩვენ იმედი გვაქვს, რომ ეს ტესტი დაგეხმარათ გამოგეაშკარავებინათ ახალი ფაქტები მამაკაცის ფიზიოლოგიზე და ვიმედოვნებთ, რომ ჩვენ რჩევებს ბრძნულად გამოიყენებთ.<br/> გინდათ რომ შეწყვიტოთ თავის შეურაწყოფილად გრძნობა? გინდათ რომ გაიგოთ როგორია ნამდვილი სექსი და ორგაზმი? მაშინ დროა შეწყვიტოთ წუწუნი. გაბედე მოქმედება! შეუკვეთე მარალ გელი და იყავი შენი ცხოვრების კონტროლში.<br/> ჩვენ გვაქვს ფასდაკლება მხოლოდ შენთვის ლეგენდარულ მარალ გელზე, რასაც შეუძლია გაგიზარდოს პენისი 5-15 სანტიმეტრით."
                },
                {
                  mask: {
                    from: 8,
                    to: 10
                  },
                  message1:
                    "Результат лучше чем у <strong>87%</strong> тестируемых",
                  message2: 'გილოცავთ! <img src="img/fire.png">',
                  message3:
                    "როგორც ჩანს თქვენ ექსპერტი ხართ კაცის ფიზიოლოგიაში! მაგრამ, თქვენ ჯერ კიდევ არ გამოგიაშკარავებიათ თქვენი პატარა მეგობრის ყველა საიდუმლო. გინდათ რომ შეწყვიტოთ თავის შეურაწყოფილად გრძნობა? გინდათ რომ გაიგოთ როგორია ნამდვილი სექსი და ორგაზმი? მაშინ დროა შეწყვიტოთ წუწუნი. გაბედე მოქმედება! შეუკვეთე მარალ გელი და იყავი შენი ცხოვრების კონტროლში.<br/>  ჩვენ გვაქვს ფასდაკლება მხოლოდ შენთვის ლეგენდარულ მარალ გელზე, რასაც შეუძლია გაგიზარდოს პენისი 5-15 სანტიმეტრით."
                }
              ]
            },
            productList: [
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream AA",
                price: "55$",
                linkTitle: "Shop now",
                url: "http://google.com"
              },
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream BA",
                price: "65$",
                linkTitle: "Shop now",
                url: "http://google.com"
              },
              {
                image: "img/product.jpg",
                imageMin: "img/product_min.jpg",
                title: "Cream CA",
                price: "75$",
                linkTitle: "Shop now",
                url: "http://google.com"
              }
            ],
            form: {
              title:
                "Would you like to order a cream for penis enlargement and change your life?",
              labelName: "Ваше имя и фамилия",
              errNameRequired: "Name is required",
              maskPhone: "{+7} (000) 000-00-00",
              regionPrefix: "0",
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
              content:
                "В ближайшие 2 часа с вами свяжется наш оператор для оформления вашего заказа! Пожалуйста, ожидайте.",
              button: "На главную"
            }
          },
          es: {
            lang: false
          },
          fr: {}
        },
        s = {
          click_id: a("sub1"),
          leadform_id: 11,
          user_geo: a("geo") || "en",
          vertical_id: 3,
          offerteam_id: 4,
          buyer: a("b"),
          ip: a("ip"),
          url: "http://135.181.31.216/api/new_lead/"
        };
      t["default"] = n;
    }
  }
]);
