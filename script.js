const SUPPORTED_LANGS = ['en', 'es', 'zh', 'no', 'nl', 'de', 'fr'];

const LOCALE_TAGS = {
    en: 'en-GB',
    es: 'es-ES',
    zh: 'zh-CN',
    no: 'nb-NO',
    nl: 'nl-NL',
    de: 'de-DE',
    fr: 'fr-FR'
};

const TZ_COORDS = {
    'Europe/Amsterdam': [52.37, 4.9],
    'Europe/Brussels': [50.85, 4.35],
    'Europe/Berlin': [52.52, 13.41],
    'Europe/Paris': [48.86, 2.35],
    'Europe/London': [51.51, -0.13],
    'Europe/Madrid': [40.42, -3.7],
    'Europe/Oslo': [59.91, 10.75],
    'Europe/Stockholm': [59.33, 18.07],
    'Europe/Copenhagen': [55.68, 12.57],
    'Europe/Zurich': [47.37, 8.54],
    'Europe/Rome': [41.9, 12.5],
    'Europe/Lisbon': [38.72, -9.14],
    'America/New_York': [40.71, -74.01],
    'America/Chicago': [41.88, -87.63],
    'America/Denver': [39.74, -104.99],
    'America/Los_Angeles': [34.05, -118.24],
    'America/Toronto': [43.65, -79.38],
    'America/Mexico_City': [19.43, -99.13],
    'America/Sao_Paulo': [-23.55, -46.63],
    'America/Buenos_Aires': [-34.6, -58.38],
    'Asia/Tokyo': [35.68, 139.69],
    'Asia/Shanghai': [31.23, 121.47],
    'Asia/Hong_Kong': [22.32, 114.17],
    'Asia/Singapore': [1.35, 103.82],
    'Asia/Seoul': [37.57, 126.98],
    'Asia/Kolkata': [28.61, 77.21],
    'Australia/Sydney': [-33.87, 151.21],
    'Pacific/Auckland': [-36.85, 174.76],
    'Africa/Johannesburg': [-26.2, 28.05],
    'Africa/Cairo': [30.04, 31.24]
};

const TZ_DEFAULT_LANG = {
    'Europe/Amsterdam': 'nl',
    'Europe/Brussels': 'nl',
    'Europe/Oslo': 'no',
    'Europe/Berlin': 'de',
    'Europe/Vienna': 'de',
    'Europe/Zurich': 'de',
    'Europe/Paris': 'fr',
    'Europe/Luxembourg': 'fr',
    'Europe/Monaco': 'fr',
    'Europe/Madrid': 'es',
    'America/Mexico_City': 'es',
    'America/Buenos_Aires': 'es',
    'America/Bogota': 'es',
    'America/Lima': 'es',
    'America/Santiago': 'es',
    'Asia/Shanghai': 'zh',
    'Asia/Hong_Kong': 'zh',
    'Asia/Taipei': 'zh',
    'Asia/Macau': 'zh'
};

const UI_TRANSLATIONS = {
    en: {
        endonym: 'English',
        langSelectAria: 'Language: {lang}',
        copyright: '\u00A9 2024\u20132026 Broccoli Buttons',
        footerContact: 'Contact',
        footerPrivacy: 'Privacy',
        footerHome: 'Broccoli Buttons',
        skipHome: 'Skip to main experience',
        skipPrivacy: 'Skip to privacy policy',
        motionPauseAria: 'Pause background motion',
        motionResumeAria: 'Resume background motion',
        weatherOptIn: '\u00B7 + local weather',
        weatherOptInAria: 'Include local outdoor weather and daylight',
        weatherOptInPending: 'Checking sky\u2026',
        titleSpa: 'Broccoli Buttons',
        titlePrivacy: 'Privacy \u2014 Broccoli Buttons & EventWhisperer',
        metaDescSpa: 'Broccoli Buttons & EventWhisperer \u2014 calm clarity when everything pulls at your day at once. Private on your own device, zero ads, zero tracking.',
        metaDescPrivacy: 'Plain-language privacy statement for Broccoli Buttons and EventWhisperer: zero advertising cookies, zero profiling trackers, local-only calendar data.',
        buttonPressAria: 'Bring calm \u2014 quiet the noise on the horizon',
        buttonNextAria: 'Compare with the noise again',
        dayRhythmAria: 'Moment of the day',
        dayparts: {
            morning: 'morning',
            afternoon: 'afternoon',
            evening: 'evening'
        },
        announcedPrefixCalm: 'Calm active.',
        announcedPrefixBusy: 'Moment loaded.',
        announcedSilenceFallback: 'Nothing else needed today.',
        census: {
            weatherRain: 'Rain likely ({temp}) \u00B7 Take an umbrella',
            weatherCold: 'Cold outside ({temp}) \u00B7 Warm coat',
            weatherWind: 'Windy outside ({temp}) \u00B7 Dress warm',
            weatherClear: 'Dry outside ({temp}) \u00B7 Fresh air',
            lowBattery: 'Battery at {pct}% \u00B7 Charge soon',
            browserUpdate: 'Browser update ready \u00B7 Safe to plan',
            insecureContext: 'Unencrypted connection \u00B7 Check address',
            permissionOpen: '{perm} access open \u00B7 Not used here',
            permCamera: 'Camera',
            permMic: 'Microphone',
            permNotif: 'Notifications',
            offlineNote: 'Offline \u00B7 Page still works locally',
            saveDataNote: 'Data saver on \u00B7 Light view active'
        },
        scenes: [
            {
                key: 'morning',
                careWeekend: 'Unhurried morning \u00B7 time outside',
                careWeekdayTemplate: '{time} Check-up \u00B7 leave 20 min early',
                careHour: 10,
                careMinute: 30,
                busyWhisper: 'Everything pulls at your day at once.',
                whisper: 'Good morning. Only what needs your care today.',
                items: [
                    { text: '14 unread chats', kind: 'noise', wing: 0 },
                    { text: 'Call Mom back', kind: 'care', wing: 0 },
                    { text: '30% off today', kind: 'noise', wing: 0 },
                    { text: 'New update ready', kind: 'noise', wing: 1 },
                    { dynamicFirstAppointment: true, kind: 'care', wing: 1 },
                    { text: 'Rate this app', kind: 'noise', wing: 1 }
                ]
            },
            {
                key: 'afternoon',
                busyWhisper: 'Plans shift, alerts keep coming.',
                whisper: 'Calm afternoon. Clarity when your day changes.',
                items: [
                    { text: '29 new emails', kind: 'noise', wing: 0 },
                    { text: 'Meeting moved \u00B7 free until 16:00', kind: 'care', wing: 0 },
                    { text: 'Sale ends soon', kind: 'noise', wing: 0 },
                    { text: 'News: read now', kind: 'noise', wing: 1 },
                    { text: 'Dinner together tonight', kind: 'care', wing: 1 },
                    { text: 'Check password', kind: 'noise', wing: 1 }
                ]
            },
            {
                key: 'evening',
                busyWhisper: 'The day is done, your screen is not.',
                whisper: 'Nothing else needed today.',
                items: [
                    { text: '8 new chats', kind: 'noise', wing: 0 },
                    { text: 'Today\u2019s offer', kind: 'noise', wing: 0 },
                    { text: 'Weekly screen report', kind: 'noise', wing: 1 },
                    { text: '3 more alerts', kind: 'noise', wing: 1 }
                ]
            }
        ]
    },
    es: {
        endonym: 'Espa\u00F1ol',
        langSelectAria: 'Idioma: {lang}',
        copyright: '\u00A9 2024\u20132026 Broccoli Buttons',
        footerContact: 'Contacto',
        footerPrivacy: 'Privacidad',
        footerHome: 'Broccoli Buttons',
        skipHome: 'Ir a la experiencia principal',
        skipPrivacy: 'Ir a la pol\u00EDtica de privacidad',
        motionPauseAria: 'Pausar movimiento del fondo',
        motionResumeAria: 'Reanudar movimiento del fondo',
        weatherOptIn: '\u00B7 + clima local',
        weatherOptInAria: 'Incluir el clima y la luz natural local',
        weatherOptInPending: 'Mirando el cielo\u2026',
        titleSpa: 'Broccoli Buttons',
        titlePrivacy: 'Privacidad \u2014 Broccoli Buttons y EventWhisperer',
        metaDescSpa: 'Broccoli Buttons y EventWhisperer \u2014 calma y claridad cuando todo reclama tu atenci\u00F3n a la vez. Privado en tu dispositivo, sin anuncios ni rastreo.',
        metaDescPrivacy: 'Declaraci\u00F3n de privacidad clara de Broccoli Buttons y EventWhisperer: sin cookies publicitarias ni rastreadores; tu calendario permanece local.',
        buttonPressAria: 'Traer calma \u2014 silenciar el ruido en el horizonte',
        buttonNextAria: 'Comparar de nuevo con el ruido',
        dayRhythmAria: 'Momento del d\u00EDa',
        dayparts: {
            morning: 'ma\u00F1ana',
            afternoon: 'tarde',
            evening: 'noche'
        },
        announcedPrefixCalm: 'Calma activa.',
        announcedPrefixBusy: 'Momento cargado.',
        announcedSilenceFallback: 'Nada m\u00E1s por hoy.',
        census: {
            weatherRain: 'Lluvia cerca ({temp}) \u00B7 Lleva paraguas',
            weatherCold: 'Fr\u00EDo fuera ({temp}) \u00B7 Abr\u00EDgate bien',
            weatherWind: 'Viento fuerte ({temp}) \u00B7 Ve preparado',
            weatherClear: 'Tiempo seco ({temp}) \u00B7 Aire fresco',
            lowBattery: 'Bater\u00EDa al {pct}% \u00B7 Conviene cargar',
            browserUpdate: 'Actualizaci\u00F3n de navegador pendiente',
            insecureContext: 'Conexi\u00F3n no cifrada \u00B7 Revisa la URL',
            permissionOpen: 'Permiso de {perm} abierto \u00B7 Sin uso aqu\u00ED',
            permCamera: 'C\u00E1mara',
            permMic: 'Micr\u00F3fono',
            permNotif: 'Avisos',
            offlineNote: 'Sin red \u00B7 La p\u00E1gina sigue funcionando',
            saveDataNote: 'Ahorro de datos activo \u00B7 Vista ligera'
        },
        scenes: [
            {
                key: 'morning',
                careWeekend: 'Ma\u00F1ana tranquila \u00B7 salir sin prisa',
                careWeekdayTemplate: '{time} Cita \u00B7 salir 20 min antes',
                careHour: 10,
                careMinute: 30,
                busyWhisper: 'Todo tira de tu d\u00EDa a la vez.',
                whisper: 'Buenos d\u00EDas. Solo lo que hoy merece tu atenci\u00F3n.',
                items: [
                    { text: '14 mensajes nuevos', kind: 'noise', wing: 0 },
                    { text: 'Llamar luego a mam\u00E1', kind: 'care', wing: 0 },
                    { text: '30% hoy', kind: 'noise', wing: 0 },
                    { text: 'Nueva actualizaci\u00F3n', kind: 'noise', wing: 1 },
                    { dynamicFirstAppointment: true, kind: 'care', wing: 1 },
                    { text: 'Danos 5 estrellas', kind: 'noise', wing: 1 }
                ]
            },
            {
                key: 'afternoon',
                busyWhisper: 'Los planes cambian y siguen llegando avisos.',
                whisper: 'Tarde tranquila. Claridad cuando el d\u00EDa cambia.',
                items: [
                    { text: '29 correos nuevos', kind: 'noise', wing: 0 },
                    { text: 'Cita movida \u00B7 libre hasta 16:00', kind: 'care', wing: 0 },
                    { text: 'Oferta termina ya', kind: 'noise', wing: 0 },
                    { text: 'Noticias: lee ya', kind: 'noise', wing: 1 },
                    { text: 'Cena juntos hoy', kind: 'care', wing: 1 },
                    { text: 'Revisa tu clave', kind: 'noise', wing: 1 }
                ]
            },
            {
                key: 'evening',
                busyWhisper: 'El d\u00EDa termin\u00F3, tu pantalla a\u00FAn no.',
                whisper: 'Nada m\u00E1s por hoy.',
                items: [
                    { text: '8 chats sin leer', kind: 'noise', wing: 0 },
                    { text: 'Solo por hoy', kind: 'noise', wing: 0 },
                    { text: 'Resumen semanal', kind: 'noise', wing: 1 },
                    { text: '3 avisos m\u00E1s', kind: 'noise', wing: 1 }
                ]
            }
        ]
    },
    zh: {
        endonym: '\u4E2D\u6587',
        langSelectAria: '\u8BED\u8A00\uFF1A{lang}',
        copyright: '\u00A9 2024\u20132026 Broccoli Buttons',
        footerContact: '\u8054\u7CFB\u6211\u4EEC',
        footerPrivacy: '\u9690\u79C1',
        footerHome: 'Broccoli Buttons',
        skipHome: '\u8DF3\u8F6C\u5230\u4E3B\u4F53\u9A8C',
        skipPrivacy: '\u8DF3\u8F6C\u5230\u9690\u79C1\u58F0\u660E',
        motionPauseAria: '\u6682\u505C\u80CC\u666F\u52A8\u753B',
        motionResumeAria: '\u6062\u590D\u80CC\u666F\u52A8\u753B',
        weatherOptIn: '\u00B7 + \u5F53\u5730\u5929\u6C14',
        weatherOptInAria: '\u7ED3\u5408\u5F53\u5730\u5929\u6C14\u4E0E\u5929\u8272',
        weatherOptInPending: '\u6B63\u5728\u67E5\u770B\u5929\u8272\u2026',
        titleSpa: 'Broccoli Buttons',
        titlePrivacy: '\u9690\u79C1 \u2014 Broccoli Buttons \u4E0E EventWhisperer',
        metaDescSpa: 'Broccoli Buttons \u4E0E EventWhisperer \u2014 \u5F53\u4E00\u5207\u540C\u65F6\u62C9\u626F\u4F60\u7684\u4E00\u5929\u65F6\u5E26\u6765\u5B89\u9759\u6E05\u6670\u3002\u4EC5\u4FDD\u5B58\u5728\u672C\u5730\u8BBE\u5907\uFF0C\u65E0\u5E7F\u544A\uFF0C\u65E0\u8FFD\u8E2A\u3002',
        metaDescPrivacy: 'Broccoli Buttons \u4E0E EventWhisperer \u901A\u4FD7\u9690\u79C1\u58F0\u660E\uFF1A\u65E0\u5E7F\u544A Cookie\u3001\u65E0\u8FFD\u8E2A\u5668\uFF0C\u65E5\u5386\u6570\u636E\u4EC5\u5728\u672C\u5730\u8BFB\u53D6\u3002',
        buttonPressAria: '\u5E26\u6765\u5B81\u9759 \u2014 \u8BA9\u5730\u5E73\u7EBF\u4E0A\u7684\u55A7\u56A3\u5B89\u9759\u4E0B\u6765',
        buttonNextAria: '\u518D\u6B21\u5BF9\u6BD4\u55A7\u56A3\u4E0E\u5B81\u9759',
        dayRhythmAria: '\u4E00\u5929\u4E2D\u7684\u65F6\u523B',
        dayparts: {
            morning: '\u65E9\u6668',
            afternoon: '\u5348\u540E',
            evening: '\u591C\u665A'
        },
        announcedPrefixCalm: '\u5DF2\u5B89\u9759\u3002',
        announcedPrefixBusy: '\u5DF2\u5207\u6362\u65F6\u523B\u3002',
        announcedSilenceFallback: '\u4ECA\u5929\u4E0D\u5FC5\u518D\u5FD9\u522B\u7684\u4E86\u3002',
        census: {
            weatherRain: '\u5373\u5C06\u4E0B\u96E8 ({temp}) \u00B7 \u8BB0\u5F97\u5E26\u4F1E',
            weatherCold: '\u5BA4\u5916\u504F\u51B7 ({temp}) \u00B7 \u591A\u7A7F\u70B9',
            weatherWind: '\u5916\u9762\u98CE\u5927 ({temp}) \u00B7 \u6CE8\u610F\u4FDD\u6696',
            weatherClear: '\u5929\u6C14\u5E72\u723D ({temp}) \u00B7 \u900F\u900F\u6C14',
            lowBattery: '\u7535\u91CF\u4EC5\u5269 {pct}% \u00B7 \u51FA\u95E8\u524D\u5145\u7535',
            browserUpdate: '\u6D4F\u89C8\u5668\u6709\u5B89\u5168\u66F4\u65B0',
            insecureContext: '\u5F53\u524D\u8FDE\u63A5\u672A\u52A0\u5BC6',
            permissionOpen: '{perm}\u6743\u9650\u5DF2\u5F00\u542F \u00B7 \u672C\u7AD9\u4E0D\u4F7F\u7528',
            permCamera: '\u76F8\u673A',
            permMic: '\u9EA6\u514B\u98CE',
            permNotif: '\u901A\u77E5',
            offlineNote: '\u79BB\u7EBF\u72B6\u6001 \u00B7 \u672C\u9875\u4ECD\u53EF\u6D4F\u89C8',
            saveDataNote: '\u5DF2\u5F00\u542F\u7701\u6D41 \u00B7 \u5207\u6362\u4E3A\u8F7B\u91CF\u6A21\u5F0F'
        },
        scenes: [
            {
                key: 'morning',
                careWeekend: '\u60A0\u95F2\u7684\u65E9\u6668 \u00B7 \u51FA\u95E8\u8D70\u8D70',
                careWeekdayTemplate: '{time} \u9884\u7EA6 \u00B7 \u63D0\u524D 20 \u5206\u949F\u51FA\u53D1',
                careHour: 10,
                careMinute: 30,
                busyWhisper: '\u6240\u6709\u4E8B\u90FD\u5728\u540C\u65F6\u62C9\u626F\u4F60\u7684\u4E00\u5929\u3002',
                whisper: '\u65E9\u5B89\u3002\u53EA\u7559\u4ECA\u5929\u771F\u6B63\u9700\u8981\u7559\u5FC3\u7684\u4E8B\u3002',
                items: [
                    { text: '14 \u6761\u65B0\u6D88\u606F', kind: 'noise', wing: 0 },
                    { text: '\u7ED9\u5988\u5988\u56DE\u4E2A\u7535\u8BDD', kind: 'care', wing: 0 },
                    { text: '\u4ECA\u65E5\u4E03\u6298\u4F18\u60E0', kind: 'noise', wing: 0 },
                    { text: '\u7CFB\u7EDF\u53EF\u66F4\u65B0', kind: 'noise', wing: 1 },
                    { dynamicFirstAppointment: true, kind: 'care', wing: 1 },
                    { text: '\u7ED9\u4E2A\u4E94\u661F\u597D\u8BC4', kind: 'noise', wing: 1 }
                ]
            },
            {
                key: 'afternoon',
                busyWhisper: '\u8BA1\u5212\u5728\u53D8\uFF0C\u63D0\u9192\u4ECD\u4E0D\u65AD\u6D8C\u6765\u3002',
                whisper: '\u5B89\u9759\u7684\u5348\u540E\u3002\u53D8\u5316\u4E4B\u4E2D\u4ECD\u6709\u6761\u7406\u3002',
                items: [
                    { text: '29 \u5C01\u65B0\u90AE\u4EF6', kind: 'noise', wing: 0 },
                    { text: '\u9884\u7EA6\u6539\u671F \u00B7 16:00 \u524D\u7A7A\u95F2', kind: 'care', wing: 0 },
                    { text: '\u4F18\u60E0\u9A6C\u4E0A\u7ED3\u675F', kind: 'noise', wing: 0 },
                    { text: '\u5FEB\u8BAF\uFF1A\u7ACB\u5373\u770B', kind: 'noise', wing: 1 },
                    { text: '\u4ECA\u665A\u4E00\u8D77\u5403\u996D', kind: 'care', wing: 1 },
                    { text: '\u68C0\u67E5\u5BC6\u7801', kind: 'noise', wing: 1 }
                ]
            },
            {
                key: 'evening',
                busyWhisper: '\u4E00\u5929\u7ED3\u675F\u4E86\uFF0C\u5C4F\u5E55\u8FD8\u6CA1\u505C\u3002',
                whisper: '\u4ECA\u5929\u4E0D\u5FC5\u518D\u5FD9\u522B\u7684\u4E86\u3002',
                items: [
                    { text: '8 \u6761\u672A\u8BFB\u7FA4\u804A', kind: 'noise', wing: 0 },
                    { text: '\u4ECA\u65E5\u7279\u60E0', kind: 'noise', wing: 0 },
                    { text: '\u672C\u5468\u5C4F\u5E55\u62A5\u544A', kind: 'noise', wing: 1 },
                    { text: '\u8FD8\u6709 3 \u6761\u63D0\u9192', kind: 'noise', wing: 1 }
                ]
            }
        ]
    },
    no: {
        endonym: 'Norsk',
        langSelectAria: 'Spr\u00E5k: {lang}',
        copyright: '\u00A9 2024\u20132026 Broccoli Buttons',
        footerContact: 'Kontakt',
        footerPrivacy: 'Personvern',
        footerHome: 'Broccoli Buttons',
        skipHome: 'Hopp til hovedopplevelsen',
        skipPrivacy: 'Hopp til personvernerkl\u00E6ring',
        motionPauseAria: 'Pause bakgrunnsbevegelse',
        motionResumeAria: 'Gjenoppta bakgrunnsbevegelse',
        weatherOptIn: '\u00B7 + lokalt v\u00E6r',
        weatherOptInAria: 'Ta med lokalt v\u00E6r og dagslys',
        weatherOptInPending: 'Sjekker himmelen\u2026',
        titleSpa: 'Broccoli Buttons',
        titlePrivacy: 'Personvern \u2014 Broccoli Buttons og EventWhisperer',
        metaDescSpa: 'Broccoli Buttons og EventWhisperer \u2014 rolig oversikt n\u00E5r alt drar i dagen din samtidig. Privat p\u00E5 din egen enhet, uten reklame eller sporing.',
        metaDescPrivacy: 'Tydelig personvernerkl\u00E6ring for Broccoli Buttons og EventWhisperer: ingen reklamekapsler eller sporing; kalenderdata blir lokalt.',
        buttonPressAria: 'Skap ro \u2014 demp st\u00F8yen p\u00E5 horisonten',
        buttonNextAria: 'Sammenlign med st\u00F8yen igjen',
        dayRhythmAria: 'Tid p\u00E5 dagen',
        dayparts: {
            morning: 'morgen',
            afternoon: 'ettermiddag',
            evening: 'kveld'
        },
        announcedPrefixCalm: 'Ro aktiv.',
        announcedPrefixBusy: 'Tidspunkt valgt.',
        announcedSilenceFallback: 'Ingenting mer trengs i dag.',
        census: {
            weatherRain: 'Regn i vente ({temp}) \u00B7 Husk paraply',
            weatherCold: 'Kaldt ute ({temp}) \u00B7 Ta p\u00E5 varm jakke',
            weatherWind: 'Mye vind ute ({temp}) \u00B7 Kle deg godt',
            weatherClear: 'Opphold ute ({temp}) \u00B7 Tid for frisk luft',
            lowBattery: 'Batteri p\u00E5 {pct}% \u00B7 Lad f\u00F8r avgang',
            browserUpdate: 'Nettleseroppdatering klar',
            insecureContext: 'Ukryptert tilkobling',
            permissionOpen: '{perm}-tilgang er \u00E5pen \u00B7 Brukes ikke her',
            permCamera: 'Kamera',
            permMic: 'Mikrofon',
            permNotif: 'Varsler',
            offlineNote: 'Frakoblet \u00B7 Siden virker fortsatt',
            saveDataNote: 'Datasparing p\u00E5 \u00B7 Enkel visning'
        },
        scenes: [
            {
                key: 'morning',
                careWeekend: 'Rolig morgen \u00B7 tid ute',
                careWeekdayTemplate: '{time} Time \u00B7 dra 20 min f\u00F8r',
                careHour: 10,
                careMinute: 30,
                busyWhisper: 'Alt drar i dagen din p\u00E5 en gang.',
                whisper: 'God morgen. Bare det som trenger oppmerksomhet i dag.',
                items: [
                    { text: '14 nye meldinger', kind: 'noise', wing: 0 },
                    { text: 'Ringe mamma en tur', kind: 'care', wing: 0 },
                    { text: '30% rabatt i dag', kind: 'noise', wing: 0 },
                    { text: 'Ny oppdatering', kind: 'noise', wing: 1 },
                    { dynamicFirstAppointment: true, kind: 'care', wing: 1 },
                    { text: 'Gi 5 stjerner', kind: 'noise', wing: 1 }
                ]
            },
            {
                key: 'afternoon',
                busyWhisper: 'Planer endres, varsler fortsetter \u00E5 komme.',
                whisper: 'Rolig ettermiddag. Oversikt n\u00E5r dagen endrer seg.',
                items: [
                    { text: '29 nye e-poster', kind: 'noise', wing: 0 },
                    { text: 'Avtale flyttet \u00B7 fri til 16:00', kind: 'care', wing: 0 },
                    { text: 'Tilbudet slutter n\u00E5', kind: 'noise', wing: 0 },
                    { text: 'Nyhet: les n\u00E5', kind: 'noise', wing: 1 },
                    { text: 'Middag sammen i kveld', kind: 'care', wing: 1 },
                    { text: 'Sjekk passordet', kind: 'noise', wing: 1 }
                ]
            },
            {
                key: 'evening',
                busyWhisper: 'Dagen er over, men skjermen gir seg ikke.',
                whisper: 'Ingenting mer trengs i dag.',
                items: [
                    { text: '8 tapte chatter', kind: 'noise', wing: 0 },
                    { text: 'Kun i dag', kind: 'noise', wing: 0 },
                    { text: 'Ukesrapporten er klar', kind: 'noise', wing: 1 },
                    { text: '3 varsler igjen', kind: 'noise', wing: 1 }
                ]
            }
        ]
    },
    nl: {
        endonym: 'Nederlands',
        langSelectAria: 'Taal kiezen: {lang}',
        copyright: '\u00A9 2024\u20132026 Broccoli Buttons',
        footerContact: 'Contact',
        footerPrivacy: 'Privacy',
        footerHome: 'Broccoli Buttons',
        skipHome: 'Direct naar de ervaring',
        skipPrivacy: 'Direct naar privacyverklaring',
        motionPauseAria: 'Wolkenbeweging pauzeren',
        motionResumeAria: 'Wolkenbeweging hervatten',
        weatherOptIn: '\u00B7 + buitenweer',
        weatherOptInAria: 'Buitenweer en echt daglicht meenemen',
        weatherOptInPending: 'Buitenlucht bekijken\u2026',
        titleSpa: 'Broccoli Buttons',
        titlePrivacy: 'Privacy \u2014 Broccoli Buttons & EventWhisperer',
        metaDescSpa: 'Broccoli Buttons & EventWhisperer \u2014 rust en overzicht in je dag wanneer alles tegelijk aandacht vraagt. Priv\u00E9 op je eigen toestel, zonder reclame of tracking.',
        metaDescPrivacy: 'Heldere privacyverklaring voor Broccoli Buttons en EventWhisperer: geen advertentiecookies of trackers; agendagegevens blijven lokaal.',
        buttonPressAria: 'Breng rust \u2014 laat de ruis verdwijnen',
        buttonNextAria: 'Vergelijk opnieuw met de drukte',
        dayRhythmAria: 'Moment van de dag',
        dayparts: {
            morning: 'ochtend',
            afternoon: 'middag',
            evening: 'avond'
        },
        announcedPrefixCalm: 'Rust actief.',
        announcedPrefixBusy: 'Moment gekozen.',
        announcedSilenceFallback: 'Voor vandaag hoeft er niets meer.',
        census: {
            weatherRain: 'Regen op komst ({temp}) \u00B7 Paraplu mee',
            weatherCold: 'Koud buiten ({temp}) \u00B7 Warme jas mee',
            weatherWind: 'Veel wind ({temp}) \u00B7 Kleed je warm',
            weatherClear: 'Droog buiten ({temp}) \u00B7 Ruimte voor frisse lucht',
            lowBattery: 'Batterij {pct}% \u00B7 Even opladen',
            browserUpdate: 'Browser-update beschikbaar',
            insecureContext: 'Onbeveiligde verbinding \u00B7 Check adres',
            permissionOpen: '{perm}-recht staat open \u00B7 Hier niet gebruikt',
            permCamera: 'Camera',
            permMic: 'Microfoon',
            permNotif: 'Meldingen',
            offlineNote: 'Offline \u00B7 Pagina werkt lokaal door',
            saveDataNote: 'Databesparing aan \u00B7 Lichte weergave'
        },
        scenes: [
            {
                key: 'morning',
                careWeekend: 'Rustige ochtend \u00B7 tijd voor buiten',
                careWeekdayTemplate: '{time} Afspraak \u00B7 20 min eerder weg',
                careHour: 10,
                careMinute: 30,
                busyWhisper: 'Alles trekt tegelijk aan je dag.',
                whisper: 'Goedemorgen. Alleen wat vandaag aandacht vraagt.',
                items: [
                    { text: '14 appjes', kind: 'noise', wing: 0 },
                    { text: 'Even bellen met mam', kind: 'care', wing: 0 },
                    { text: 'Nu 30% korting', kind: 'noise', wing: 0 },
                    { text: 'Nieuwe update', kind: 'noise', wing: 1 },
                    { dynamicFirstAppointment: true, kind: 'care', wing: 1 },
                    { text: 'Geef 5 sterren', kind: 'noise', wing: 1 }
                ]
            },
            {
                key: 'afternoon',
                busyWhisper: 'Plannen schuiven, prikkels blijven komen.',
                whisper: 'Rustige middag. Overzicht als je dag verandert.',
                items: [
                    { text: '29 nieuwe mails', kind: 'noise', wing: 0 },
                    { text: 'Afspraak verzet \u00B7 ruimte tot 16:00', kind: 'care', wing: 0 },
                    { text: 'Korting stopt zo', kind: 'noise', wing: 0 },
                    { text: 'Nieuws: lees nu', kind: 'noise', wing: 1 },
                    { text: 'Vanavond samen eten', kind: 'care', wing: 1 },
                    { text: 'Wachtwoord checken', kind: 'noise', wing: 1 }
                ]
            },
            {
                key: 'evening',
                busyWhisper: 'De dag is klaar, je scherm nog niet.',
                whisper: 'Voor vandaag hoeft er niets meer.',
                items: [
                    { text: '8 gemiste berichten', kind: 'noise', wing: 0 },
                    { text: 'Aanbieding vandaag', kind: 'noise', wing: 0 },
                    { text: 'Weekrapport schermtijd', kind: 'noise', wing: 1 },
                    { text: 'Nog 3 meldingen', kind: 'noise', wing: 1 }
                ]
            }
        ]
    },
    de: {
        endonym: 'Deutsch',
        langSelectAria: 'Sprache: {lang}',
        copyright: '\u00A9 2024\u20132026 Broccoli Buttons',
        footerContact: 'Kontakt',
        footerPrivacy: 'Datenschutz',
        footerHome: 'Broccoli Buttons',
        skipHome: 'Direkt zum Erlebnis',
        skipPrivacy: 'Direkt zur Datenschutzerkl\u00E4rung',
        motionPauseAria: 'Hintergrundbewegung pausieren',
        motionResumeAria: 'Hintergrundbewegung fortsetzen',
        weatherOptIn: '\u00B7 + Wetter vor Ort',
        weatherOptInAria: 'Lokales Wetter und Tageslicht einbeziehen',
        weatherOptInPending: 'Wetter wird gepr\u00FCft\u2026',
        titleSpa: 'Broccoli Buttons',
        titlePrivacy: 'Datenschutz \u2014 Broccoli Buttons & EventWhisperer',
        metaDescSpa: 'Broccoli Buttons & EventWhisperer \u2014 ruhiger \u00DCberblick, wenn alles gleichzeitig an deinem Tag zieht. Privat auf deinem Ger\u00E4t, ohne Werbung oder Tracking.',
        metaDescPrivacy: 'Klare Datenschutzerkl\u00E4rung f\u00FCr Broccoli Buttons und EventWhisperer: keine Werbe-Cookies oder Tracker; Kalenderdaten bleiben lokal.',
        buttonPressAria: 'Ruhe bringen \u2014 Unruhe vom Horizont nehmen',
        buttonNextAria: 'Nochmals mit der Unruhe vergleichen',
        dayRhythmAria: 'Tageszeit',
        dayparts: {
            morning: 'Morgen',
            afternoon: 'Nachmittag',
            evening: 'Abend'
        },
        announcedPrefixCalm: 'Ruhe aktiv.',
        announcedPrefixBusy: 'Moment gew\u00E4hlt.',
        announcedSilenceFallback: 'F\u00FCr heute ist nichts mehr n\u00F6tig.',
        census: {
            weatherRain: 'Regen in Sicht ({temp}) \u00B7 Schirm einstecken',
            weatherCold: 'Kalt drau\u00DFen ({temp}) \u00B7 Warme Jacke mit',
            weatherWind: 'Viel Wind ({temp}) \u00B7 Gut anziehen',
            weatherClear: 'Trocken drau\u00DFen ({temp}) \u00B7 Frische Luft',
            lowBattery: 'Akku bei {pct}% \u00B7 Bald laden',
            browserUpdate: 'Browser-Update verf\u00FCgbar',
            insecureContext: 'Unverschl\u00FCsselte Verbindung',
            permissionOpen: '{perm}-Freigabe offen \u00B7 Hier ungenutzt',
            permCamera: 'Kamera',
            permMic: 'Mikrofon',
            permNotif: 'Mitteilungen',
            offlineNote: 'Offline \u00B7 Seite bleibt nutzbar',
            saveDataNote: 'Datensparmodus \u00B7 Ruhige Ansicht'
        },
        scenes: [
            {
                key: 'morning',
                careWeekend: 'Ruhiger Morgen \u00B7 Zeit f\u00FCr drau\u00DFen',
                careWeekdayTemplate: '{time} Termin \u00B7 20 Min fr\u00FCher los',
                careHour: 10,
                careMinute: 30,
                busyWhisper: 'Alles zieht gleichzeitig an deinem Tag.',
                whisper: 'Guten Morgen. Nur was heute Aufmerksamkeit braucht.',
                items: [
                    { text: '14 neue Chats', kind: 'noise', wing: 0 },
                    { text: 'Kurz bei Mama anrufen', kind: 'care', wing: 0 },
                    { text: 'Heute 30% Rabatt', kind: 'noise', wing: 0 },
                    { text: 'Neues Update', kind: 'noise', wing: 1 },
                    { dynamicFirstAppointment: true, kind: 'care', wing: 1 },
                    { text: 'Gib 5 Sterne', kind: 'noise', wing: 1 }
                ]
            },
            {
                key: 'afternoon',
                busyWhisper: 'Pl\u00E4ne \u00E4ndern sich, Meldungen str\u00F6men weiter.',
                whisper: 'Ruhiger Nachmittag. \u00DCberblick, wenn sich der Tag \u00E4ndert.',
                items: [
                    { text: '29 neue Mails', kind: 'noise', wing: 0 },
                    { text: 'Termin verschoben \u00B7 frei bis 16:00', kind: 'care', wing: 0 },
                    { text: 'Rabatt endet bald', kind: 'noise', wing: 0 },
                    { text: 'News: jetzt lesen', kind: 'noise', wing: 1 },
                    { text: 'Heute gemeinsam essen', kind: 'care', wing: 1 },
                    { text: 'Passwort pr\u00FCfen', kind: 'noise', wing: 1 }
                ]
            },
            {
                key: 'evening',
                busyWhisper: 'Der Tag ist vorbei, dein Bildschirm noch nicht.',
                whisper: 'F\u00FCr heute ist nichts mehr n\u00F6tig.',
                items: [
                    { text: '8 neue Gruppen', kind: 'noise', wing: 0 },
                    { text: 'Nur heute', kind: 'noise', wing: 0 },
                    { text: 'Wochenbericht fertig', kind: 'noise', wing: 1 },
                    { text: 'Noch 3 Hinweise', kind: 'noise', wing: 1 }
                ]
            }
        ]
    },
    fr: {
        endonym: 'Fran\u00E7ais',
        langSelectAria: 'Langue : {lang}',
        copyright: '\u00A9 2024\u20132026 Broccoli Buttons',
        footerContact: 'Contact',
        footerPrivacy: 'Confidentialit\u00E9',
        footerHome: 'Broccoli Buttons',
        skipHome: 'Aller \u00E0 l\u2019exp\u00E9rience',
        skipPrivacy: 'Aller \u00E0 la confidentialit\u00E9',
        motionPauseAria: 'Mettre le fond en pause',
        motionResumeAria: 'Reprendre le mouvement du fond',
        weatherOptIn: '\u00B7 + m\u00E9t\u00E9o locale',
        weatherOptInAria: 'Prendre en compte la m\u00E9t\u00E9o et la lumi\u00E8re locales',
        weatherOptInPending: 'Observation du ciel\u2026',
        titleSpa: 'Broccoli Buttons',
        titlePrivacy: 'Confidentialit\u00E9 \u2014 Broccoli Buttons et EventWhisperer',
        metaDescSpa: 'Broccoli Buttons et EventWhisperer \u2014 calme et clart\u00E9 quand tout sollicite votre journ\u00E9e en m\u00EAme temps. Priv\u00E9 sur votre appareil, sans pub ni suivi.',
        metaDescPrivacy: 'Politique de confidentialit\u00E9 claire de Broccoli Buttons et EventWhisperer : aucun cookie publicitaire ni suivi ; votre agenda reste local.',
        buttonPressAria: 'Apporter le calme \u2014 apaiser le bruit sur l\u2019horizon',
        buttonNextAria: 'Comparer \u00E0 nouveau avec le bruit',
        dayRhythmAria: 'Moment de la journ\u00E9e',
        dayparts: {
            morning: 'matin',
            afternoon: 'apr\u00E8s-midi',
            evening: 'soir'
        },
        announcedPrefixCalm: 'Calme actif.',
        announcedPrefixBusy: 'Moment choisi.',
        announcedSilenceFallback: 'Plus rien d\u2019urgent pour aujourd\u2019hui.',
        census: {
            weatherRain: 'Pluie pr\u00E9vue ({temp}) \u00B7 Prendre un parapluie',
            weatherCold: 'Froid dehors ({temp}) \u00B7 Manteau chaud',
            weatherWind: 'Beaucoup de vent ({temp}) \u00B7 Couvrez-vous',
            weatherClear: 'Temps sec ({temp}) \u00B7 Air frais dehors',
            lowBattery: 'Batterie \u00E0 {pct}% \u00B7 Penser \u00E0 charger',
            browserUpdate: 'Mise \u00E0 jour navigateur disponible',
            insecureContext: 'Connexion non chiffr\u00E9e',
            permissionOpen: 'Acc\u00E8s {perm} actif \u00B7 Non utilis\u00E9 ici',
            permCamera: 'Cam\u00E9ra',
            permMic: 'Micro',
            permNotif: 'Notifications',
            offlineNote: 'Hors ligne \u00B7 Page disponible en local',
            saveDataNote: '\u00C9conomie de donn\u00E9es \u00B7 Vue all\u00E9g\u00E9e'
        },
        scenes: [
            {
                key: 'morning',
                careWeekend: 'Matin\u00E9e tranquille \u00B7 un tour dehors',
                careWeekdayTemplate: '{time} Rendez-vous \u00B7 partir 20 min t\u00F4t',
                careHour: 10,
                careMinute: 30,
                busyWhisper: 'Tout tire sur votre journ\u00E9e en m\u00EAme temps.',
                whisper: 'Bonjour. Seulement ce qui compte aujourd\u2019hui.',
                items: [
                    { text: '14 nouveaux messages', kind: 'noise', wing: 0 },
                    { text: 'Rappeler maman', kind: 'care', wing: 0 },
                    { text: '-30 % aujourd\u2019hui', kind: 'noise', wing: 0 },
                    { text: 'Nouvelle mise \u00E0 jour', kind: 'noise', wing: 1 },
                    { dynamicFirstAppointment: true, kind: 'care', wing: 1 },
                    { text: 'Donnez 5 \u00E9toiles', kind: 'noise', wing: 1 }
                ]
            },
            {
                key: 'afternoon',
                busyWhisper: 'Les plans changent, les alertes continuent.',
                whisper: 'Apr\u00E8s-midi serein. De la clart\u00E9 quand la journ\u00E9e bouge.',
                items: [
                    { text: '29 nouveaux e-mails', kind: 'noise', wing: 0 },
                    { text: 'Rendez-vous d\u00E9plac\u00E9 \u00B7 libre jusqu\u2019\u00E0 16h', kind: 'care', wing: 0 },
                    { text: 'Offre bient\u00F4t finie', kind: 'noise', wing: 0 },
                    { text: 'Info : lire vite', kind: 'noise', wing: 1 },
                    { text: 'D\u00EEner ensemble ce soir', kind: 'care', wing: 1 },
                    { text: 'V\u00E9rifier mot de passe', kind: 'noise', wing: 1 }
                ]
            },
            {
                key: 'evening',
                busyWhisper: 'La journ\u00E9e est finie, pas votre \u00E9cran.',
                whisper: 'Plus rien d\u2019urgent pour aujourd\u2019hui.',
                items: [
                    { text: '8 messages manqu\u00E9s', kind: 'noise', wing: 0 },
                    { text: 'Juste aujourd\u2019hui', kind: 'noise', wing: 0 },
                    { text: 'Bilan hebdo pr\u00EAt', kind: 'noise', wing: 1 },
                    { text: '3 alertes de plus', kind: 'noise', wing: 1 }
                ]
            }
        ]
    }
};

let currentLang = 'en';
const memoryPrefs = Object.create(null);

function isPrivacySignalActive() {
    try {
        if (typeof navigator !== 'undefined') {
            if (navigator.globalPrivacyControl === true) return true;
            if (navigator.doNotTrack === '1' || navigator.doNotTrack === 'yes') return true;
        }
        if (typeof window !== 'undefined' && (window.doNotTrack === '1' || window.doNotTrack === 'yes')) {
            return true;
        }
    } catch (_) {
        return true;
    }
    return false;
}

function canPersistPreferences() {
    if (isPrivacySignalActive()) return false;
    try {
        if (typeof navigator !== 'undefined' && navigator.cookieEnabled === false) {
            return false;
        }
    } catch (_) {
        return false;
    }
    return true;
}

function safeGetPref(key) {
    if (key in memoryPrefs) return memoryPrefs[key];
    try {
        return localStorage.getItem(key);
    } catch (_) {
        return null;
    }
}

function safeSetPref(key, value) {
    memoryPrefs[key] = String(value);
    if (!canPersistPreferences()) return;
    try {
        localStorage.setItem(key, String(value));
    } catch (_) { /* negeer */ }
}

function guessCoarseCoordsFromTimezone(now) {
    const tzMeridianLon = now ? (-now.getTimezoneOffset() / 60) * 15 : 15;
    try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        if (tz && TZ_COORDS[tz]) return TZ_COORDS[tz];
        if (tz.startsWith('Europe/')) return [50.0, tzMeridianLon];
        if (tz.startsWith('America/')) return [39.0, tzMeridianLon];
        if (tz.startsWith('Asia/')) return [34.0, tzMeridianLon];
        if (tz.startsWith('Australia/') || tz.startsWith('Pacific/')) return [-33.0, tzMeridianLon];
        if (tz.startsWith('Africa/')) return [5.0, tzMeridianLon];
    } catch (_) { /* fallback */ }
    return [52.0, tzMeridianLon];
}

function computeLocalDaylight(now, latOverride, lonOverride) {
    const coords = (typeof latOverride === 'number' && typeof lonOverride === 'number')
        ? [latOverride, lonOverride]
        : guessCoarseCoordsFromTimezone(now);
    const latDeg = coords[0];
    const lonDeg = coords[1];
    const dayOfYear = Math.floor(
        (Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(now.getFullYear(), 0, 1)) / 86400000
    ) + 1;

    // NOAA astronomische zonneformule (declinatie + tijdsvereffening + lengtegraad/tijdzonecorrectie)
    const gamma = ((2 * Math.PI) / 365) * (dayOfYear - 1 + (now.getHours() - 12) / 24);
    const eqTimeMin = 229.18 * (
        0.000075 +
        0.001868 * Math.cos(gamma) -
        0.032077 * Math.sin(gamma) -
        0.014615 * Math.cos(2 * gamma) -
        0.040849 * Math.sin(2 * gamma)
    );
    const decl =
        0.006918 -
        0.399912 * Math.cos(gamma) +
        0.070257 * Math.sin(gamma) -
        0.006758 * Math.cos(2 * gamma) +
        0.000907 * Math.sin(2 * gamma) -
        0.002697 * Math.cos(3 * gamma) +
        0.00148 * Math.sin(3 * gamma);

    const latRad = (latDeg * Math.PI) / 180;
    const zenith = (90.833 * Math.PI) / 180;
    const cosH = (Math.cos(zenith) / (Math.cos(latRad) * Math.cos(decl))) - (Math.tan(latRad) * Math.tan(decl));

    const localHour = now.getHours() + now.getMinutes() / 60;
    if (cosH >= 1) {
        return { isDay: false, sky: 'night', daypart: 'night' };
    }
    if (cosH <= -1) {
        return { isDay: true, sky: 'day', daypart: 'afternoon' };
    }

    const tzHoursEast = -now.getTimezoneOffset() / 60;
    const solarNoonHour = 12 + tzHoursEast - (lonDeg / 15) - (eqTimeMin / 60);
    const halfDayHours = ((Math.acos(cosH) * 180) / Math.PI) / 15;
    const sunriseHour = solarNoonHour - halfDayHours;
    const sunsetHour = solarNoonHour + halfDayHours;

    const isDay = localHour >= sunriseHour && localHour < sunsetHour;
    let daypart = 'night';
    if (localHour >= Math.max(5, sunriseHour - 0.5) && localHour < 12) {
        daypart = 'morning';
    } else if (localHour >= 12 && localHour < Math.max(16.5, sunsetHour)) {
        daypart = 'afternoon';
    } else if (localHour >= Math.max(16.5, sunsetHour) && localHour < Math.max(20.5, sunsetHour + 2)) {
        daypart = 'dusk';
    } else {
        daypart = 'night';
    }
    return { isDay, sky: isDay ? 'day' : 'night', sunriseHour, sunsetHour, daypart };
}

function detectVisitorContext() {
    const now = new Date();
    const solar = computeLocalDaylight(now);
    const day = now.getDay();
    let initialSceneIdx = 1;
    if (solar.daypart === 'morning') initialSceneIdx = 0;
    else if (solar.daypart === 'afternoon') initialSceneIdx = 1;
    else initialSceneIdx = 2;

    const saveData = Boolean(
        typeof navigator !== 'undefined' &&
        navigator.connection &&
        navigator.connection.saveData
    );
    return {
        now,
        isWeekend: day === 0 || day === 6,
        realDaypart: solar.daypart,
        realSky: solar.sky,
        initialSceneIdx,
        saveData
    };
}

const visitorCtx = detectVisitorContext();

const censusState = {
    geoPermission: 'unknown',
    openPermKeys: [],
    batteryLevel: null,
    batteryCharging: null,
    outdatedBrowser: false,
    insecureConnection: false,
    offline: typeof navigator !== 'undefined' ? !navigator.onLine : false,
    lowBandwidth: visitorCtx.saveData,
    weather: null // { tempC, rainExpected, cold, windy, isDay }
};

const toyState = {
    sceneIdx: visitorCtx.initialSceneIdx,
    isFiltered: false,
    hasRevealedMore: false,
    lastClickMs: 0,
    refresh: null
};

function getIntlTag(lang) {
    if (lang === 'en') {
        const navLang = (typeof navigator !== 'undefined' && navigator.language) ? navigator.language : '';
        if (/^en[-_]/i.test(navLang)) return navLang.replace('_', '-');
    }
    return LOCALE_TAGS[lang] || 'en-GB';
}

function formatLocalTime(hour, minute, lang) {
    try {
        const d = new Date();
        d.setHours(hour, minute, 0, 0);
        return new Intl.DateTimeFormat(getIntlTag(lang), {
            hour: 'numeric',
            minute: '2-digit'
        }).format(d);
    } catch (_) {
        return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    }
}

function formatWorldAnchor(now, lang) {
    try {
        const tag = getIntlTag(lang);
        const weekday = new Intl.DateTimeFormat(tag, { weekday: 'long' }).format(now);
        const clock = new Intl.DateTimeFormat(tag, { hour: 'numeric', minute: '2-digit' }).format(now);
        if (censusState.weather && typeof censusState.weather.tempC === 'number') {
            return `${weekday} \u00B7 ${clock} \u00B7 ${Math.round(censusState.weather.tempC)}\u00A0\u00B0C`;
        }
        return `${weekday} \u00B7 ${clock}`;
    } catch (_) {
        return '';
    }
}

function applySkyAndDaypart(sky, daypart) {
    if (!document.body) return;
    const resolvedSky = sky === 'day' ? 'day' : 'night';
    const isRain = Boolean(censusState.weather && censusState.weather.rainExpected);
    document.body.setAttribute('data-sky', resolvedSky);
    document.body.setAttribute('data-daypart', daypart);
    if (isRain) {
        document.body.setAttribute('data-weather', 'rain');
    } else {
        document.body.removeAttribute('data-weather');
    }
    const themeMeta = document.getElementById('themeColorMeta');
    if (themeMeta) {
        if (resolvedSky === 'day') {
            themeMeta.setAttribute('content', isRain ? '#8aa3b2' : '#8fb8ce');
        } else {
            themeMeta.setAttribute('content', daypart === 'dusk' ? '#071e19' : '#051319');
        }
    }
}

function applyThemeForScene(sceneIdx, isInitialMoment) {
    if (isInitialMoment) {
        const sky = (censusState.weather && typeof censusState.weather.isDay === 'boolean')
            ? (censusState.weather.isDay ? 'day' : 'night')
            : visitorCtx.realSky;
        applySkyAndDaypart(sky, visitorCtx.realDaypart);
        return;
    }
    if (sceneIdx === 0) {
        applySkyAndDaypart('day', 'morning');
    } else if (sceneIdx === 1) {
        applySkyAndDaypart('day', 'afternoon');
    } else {
        applySkyAndDaypart('night', visitorCtx.realDaypart === 'dusk' ? 'dusk' : 'night');
    }
}

function checkBrowserHygiene() {
    try {
        const host = (typeof location !== 'undefined' && location.hostname) ? location.hostname : '';
        const isLocalHost = host === 'localhost' || host === '127.0.0.1';
        if (typeof window !== 'undefined' && window.isSecureContext === false && !isLocalHost) {
            censusState.insecureConnection = true;
        }
        if (typeof navigator !== 'undefined' && navigator.userAgentData && Array.isArray(navigator.userAgentData.brands)) {
            const chrom = navigator.userAgentData.brands.find(b => /Chrom|Edge|Opera/i.test(b.brand));
            if (chrom && parseInt(chrom.version, 10) > 0 && parseInt(chrom.version, 10) < 124) {
                censusState.outdatedBrowser = true;
            }
        } else if (typeof navigator !== 'undefined' && navigator.userAgent) {
            const ua = navigator.userAgent;
            const ff = ua.match(/Firefox\/(\d+)/);
            const ch = ua.match(/Chrome\/(\d+)/);
            if (ff && parseInt(ff[1], 10) < 122) censusState.outdatedBrowser = true;
            else if (ch && parseInt(ch[1], 10) < 124) censusState.outdatedBrowser = true;
        }
    } catch (_) { /* negeer */ }
}

function getActiveCensusNotes(lang) {
    const tr = (UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.en).census;
    const notes = [];

    if (censusState.weather) {
        const tempStr = `${Math.round(censusState.weather.tempC)}\u00A0\u00B0C`;
        if (censusState.weather.rainExpected) {
            notes.push(tr.weatherRain.replace('{temp}', tempStr));
        } else if (censusState.weather.cold) {
            notes.push(tr.weatherCold.replace('{temp}', tempStr));
        } else if (censusState.weather.windy) {
            notes.push(tr.weatherWind.replace('{temp}', tempStr));
        } else {
            notes.push(tr.weatherClear.replace('{temp}', tempStr));
        }
    }

    if (censusState.batteryCharging === false && typeof censusState.batteryLevel === 'number' && censusState.batteryLevel <= 0.25) {
        const pct = Math.max(1, Math.round(censusState.batteryLevel * 100));
        notes.push(tr.lowBattery.replace('{pct}', String(pct)));
    }

    return notes.slice(0, 2);
}

async function fetchCoarseLocalWeather(lat, lon) {
    const coarseLat = Math.round(lat * 10) / 10;
    const coarseLon = Math.round(lon * 10) / 10;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(coarseLat)}&longitude=${encodeURIComponent(coarseLon)}&current=temperature_2m,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m,is_day&hourly=precipitation_probability,precipitation&forecast_days=1&timezone=auto`;

    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = controller ? window.setTimeout(() => controller.abort(), 4500) : null;
    try {
        const fetchOpts = {
            referrerPolicy: 'no-referrer',
            credentials: 'omit',
            cache: 'no-store'
        };
        if (controller) fetchOpts.signal = controller.signal;
        const resp = await fetch(url, fetchOpts);
        if (timer) window.clearTimeout(timer);
        if (!resp.ok) return;
        const data = await resp.json();
        const cur = data && data.current ? data.current : null;
        if (!cur) return;

        const wmo = Number(cur.weather_code || 0);
        const rainNow = Number(cur.rain || 0) > 0 || Number(cur.showers || 0) > 0 || Number(cur.precipitation || 0) > 0 || (wmo >= 51 && wmo <= 67) || (wmo >= 80 && wmo <= 99);
        let rainSoon = false;
        if (data.hourly && Array.isArray(data.hourly.precipitation_probability)) {
            const nowHour = new Date().getHours();
            for (let h = nowHour; h <= Math.min(23, nowHour + 3); h++) {
                if (Number(data.hourly.precipitation_probability[h] || 0) >= 55) {
                    rainSoon = true;
                    break;
                }
            }
        }
        const tempC = Number(cur.temperature_2m);
        const windKmh = Number(cur.wind_speed_10m || 0);

        censusState.weather = {
            tempC,
            rainExpected: rainNow || rainSoon,
            cold: tempC <= 2 || (wmo >= 71 && wmo <= 77) || wmo === 85 || wmo === 86,
            windy: windKmh >= 38,
            isDay: Number(cur.is_day) === 1
        };

        visitorCtx.realSky = censusState.weather.isDay ? 'day' : 'night';
        if (toyState.sceneIdx === visitorCtx.initialSceneIdx) {
            applyThemeForScene(toyState.sceneIdx, true);
        }
        const optBtn = document.getElementById('weatherOptInBtn');
        if (optBtn) optBtn.hidden = true;

        const worldAnchor = document.getElementById('worldTimeAnchor');
        if (worldAnchor) worldAnchor.textContent = formatWorldAnchor(new Date(), currentLang);
        if (toyState.refresh) toyState.refresh();
    } catch (_) {
        if (timer) window.clearTimeout(timer);
    }
}

function requestLiveLocationWeather(optBtn) {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
        if (optBtn) optBtn.hidden = true;
        return;
    }
    const tr = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.en;
    if (optBtn) {
        optBtn.disabled = true;
        optBtn.textContent = tr.weatherOptInPending;
    }
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            censusState.geoPermission = 'granted';
            fetchCoarseLocalWeather(pos.coords.latitude, pos.coords.longitude);
        },
        () => {
            if (optBtn) {
                optBtn.disabled = false;
                optBtn.hidden = true;
            }
        },
        { enableHighAccuracy: false, timeout: 6000, maximumAge: 1800000 }
    );
}

async function runWebBodyCensus() {
    checkBrowserHygiene();

    // Batterij-status (alleen als lage batterij zonder oplader)
    if (typeof navigator !== 'undefined' && typeof navigator.getBattery === 'function') {
        try {
            const bat = await navigator.getBattery();
            const syncBattery = () => {
                censusState.batteryLevel = bat.level;
                censusState.batteryCharging = bat.charging;
                if (bat.charging === false && bat.level <= 0.15) {
                    applyMotionPreference(true, false);
                }
                if (toyState.refresh) toyState.refresh();
            };
            syncBattery();
            bat.addEventListener('levelchange', syncBattery);
            bat.addEventListener('chargingchange', syncBattery);
        } catch (_) { /* negeer */ }
    }

    // Netwerkstatus
    if (typeof window !== 'undefined') {
        const syncNet = () => {
            censusState.offline = typeof navigator !== 'undefined' ? !navigator.onLine : false;
            const conn = typeof navigator !== 'undefined' ? navigator.connection : null;
            censusState.lowBandwidth = Boolean(conn && (conn.saveData || conn.effectiveType === '2g' || conn.effectiveType === 'slow-2g'));
            if (document.body) {
                document.body.classList.toggle('is-save-data', Boolean(visitorCtx.saveData || censusState.lowBandwidth));
            }
            if (toyState.refresh) toyState.refresh();
        };
        window.addEventListener('online', syncNet);
        window.addEventListener('offline', syncNet);
    }

    // Stille locatie-check voor buitenweer (zonder technische meldingen of ongevraagde pop-up)
    if (typeof navigator !== 'undefined' && navigator.permissions && typeof navigator.permissions.query === 'function') {
        try {
            const geoStatus = await navigator.permissions.query({ name: 'geolocation' });
            censusState.geoPermission = geoStatus ? geoStatus.state : 'prompt';
            const optBtn = document.getElementById('weatherOptInBtn');
            if (censusState.geoPermission === 'granted' && !isPrivacySignalActive()) {
                if (optBtn) optBtn.hidden = true;
                requestLiveLocationWeather(null);
            } else if ((censusState.geoPermission === 'prompt' || (censusState.geoPermission === 'granted' && isPrivacySignalActive())) && optBtn) {
                optBtn.hidden = false;
            }
        } catch (_) {
            const optBtn = document.getElementById('weatherOptInBtn');
            if (optBtn && navigator.geolocation) optBtn.hidden = false;
        }
    } else {
        const optBtn = document.getElementById('weatherOptInBtn');
        if (optBtn && typeof navigator !== 'undefined' && navigator.geolocation) {
            optBtn.hidden = false;
        }
    }

    if (toyState.refresh) toyState.refresh();
}

function normalizeSupportedLang(code) {
    if (!code || typeof code !== 'string') return '';
    const lower = code.trim().toLowerCase();
    const base = lower.split(/[-_]/)[0];
    if (base === 'nb' || base === 'nn') return 'no';
    if (base === 'zh') return 'zh';
    return SUPPORTED_LANGS.includes(base) ? base : '';
}

function resolveInitialLang() {
    const saved = normalizeSupportedLang(safeGetPref('selectedLang'));
    if (saved) return saved;

    const candidates = Array.isArray(navigator.languages) && navigator.languages.length
        ? navigator.languages
        : [navigator.language || navigator.userLanguage || 'en'];

    const hasExplicitNonEn = candidates.some(c => {
        const matched = normalizeSupportedLang(c);
        return matched && matched !== 'en';
    });
    if (hasExplicitNonEn) {
        for (const candidate of candidates) {
            const matched = normalizeSupportedLang(candidate);
            if (matched) return matched;
        }
    }

    const isExplicitEnRegion = candidates.some(c => /^en[-_](gb|au|ca|nz|ie)$/i.test(String(c || '').trim()));
    if (!isExplicitEnRegion) {
        try {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
            if (tz && TZ_DEFAULT_LANG[tz]) return TZ_DEFAULT_LANG[tz];
        } catch (_) { /* negeer */ }
    }

    for (const candidate of candidates) {
        const matched = normalizeSupportedLang(candidate);
        if (matched) return matched;
    }
    return 'en';
}

function applyLanguage(lang) {
    const safeLang = normalizeSupportedLang(lang) || 'en';
    currentLang = safeLang;
    safeSetPref('selectedLang', safeLang);
    document.documentElement.lang = safeLang;

    const strings = UI_TRANSLATIONS[safeLang] || UI_TRANSLATIONS.en;

    const selectedOption = document.getElementById('selectedLanguage');
    const optionsList = document.querySelectorAll('.option');
    let matchedText = strings.endonym;
    optionsList.forEach(option => {
        const isCurrent = option.getAttribute('data-lang') === safeLang;
        option.classList.toggle('active', isCurrent);
        option.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
        if (isCurrent && option.textContent.trim()) {
            matchedText = option.textContent.trim();
        }
    });
    if (selectedOption) {
        const langLabel = selectedOption.querySelector('.lang-label');
        if (langLabel) {
            langLabel.textContent = matchedText;
        }
        selectedOption.setAttribute(
            'aria-label',
            (strings.langSelectAria || 'Language: {lang}').replace('{lang}', matchedText)
        );
    }

    const isStandalonePrivacy = !document.getElementById('home');
    document.title = isStandalonePrivacy ? strings.titlePrivacy : strings.titleSpa;
    const metaDesc = document.getElementById('metaDescription');
    if (metaDesc) {
        metaDesc.setAttribute('content', isStandalonePrivacy ? (strings.metaDescPrivacy || '') : (strings.metaDescSpa || ''));
    }

    const skipLink = document.getElementById('skipLink');
    if (skipLink) {
        skipLink.textContent = isStandalonePrivacy ? strings.skipPrivacy : strings.skipHome;
    }

    const worldTimeAnchor = document.getElementById('worldTimeAnchor');
    if (worldTimeAnchor) {
        worldTimeAnchor.textContent = formatWorldAnchor(new Date(), safeLang);
    }

    const weatherOptBtn = document.getElementById('weatherOptInBtn');
    if (weatherOptBtn) {
        if (!weatherOptBtn.disabled) {
            weatherOptBtn.textContent = strings.weatherOptIn;
        }
        weatherOptBtn.setAttribute('aria-label', strings.weatherOptInAria || strings.weatherOptIn);
    }

    const broccoliButton = document.getElementById('broccoliButton');
    if (broccoliButton) {
        broccoliButton.setAttribute(
            'aria-label',
            toyState.isFiltered ? strings.buttonNextAria : strings.buttonPressAria
        );
    }

    const isMotionPaused = document.body ? document.body.classList.contains('is-motion-paused') : false;
    syncMotionToggleAria(isMotionPaused, strings);

    const footerCopy = document.querySelector('footer .footer-copy');
    if (footerCopy) {
        footerCopy.textContent = strings.copyright;
    }
    const footerContact = document.querySelector('footer [data-footer-nav="contact"]');
    if (footerContact) {
        footerContact.textContent = strings.footerContact;
    }
    const footerPrivacy = document.querySelector('footer [data-footer-nav="privacy"]');
    if (footerPrivacy) {
        footerPrivacy.textContent = strings.footerPrivacy;
    }
    const footerHome = document.querySelector('footer a.privacy-link:not([data-footer-nav])');
    if (footerHome) {
        footerHome.textContent = strings.footerHome;
    }

    updateContentLanguage(safeLang);
    if (toyState.refresh) {
        toyState.refresh();
    }
}

function syncMotionToggleAria(paused, stringsOverride) {
    const btn = document.getElementById('motionToggle');
    if (!btn) return;
    const strings = stringsOverride || UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.en;
    const label = paused ? strings.motionResumeAria : strings.motionPauseAria;
    btn.setAttribute('aria-pressed', paused ? 'true' : 'false');
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
    btn.textContent = label;
}

function applyMotionPreference(paused, persist) {
    if (!document.body) return;
    const isPaused = Boolean(paused);
    document.body.classList.toggle('is-motion-paused', isPaused);
    syncMotionToggleAria(isPaused);
    if (persist) {
        safeSetPref('calmStaticView', isPaused ? '1' : '0');
    }
}

function resolveSectionIdFromHash(rawHash) {
    const clean = String(rawHash || '').replace(/^#/, '').trim().toLowerCase();
    if (clean === 'eventwhisperer' || clean === 'mystery') return 'mystery';
    if (clean === 'contact') return 'contact';
    if (clean === 'privacy') return 'privacy';
    return 'home';
}

function canonicalHashForSection(sectionId) {
    if (sectionId === 'mystery') return '#eventwhisperer';
    if (sectionId === 'contact') return '#contact';
    if (sectionId === 'privacy') return '#privacy';
    return '';
}

document.addEventListener('DOMContentLoaded', () => {
    currentLang = resolveInitialLang();
    applyThemeForScene(toyState.sceneIdx, true);
    if (document.body) {
        document.body.classList.toggle('is-save-data', Boolean(visitorCtx.saveData || censusState.lowBandwidth));
    }

    const reducedMotionQuery = (typeof window !== 'undefined' && typeof window.matchMedia === 'function')
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null;
    const savedMotion = safeGetPref('calmStaticView');
    const initialPaused = savedMotion === '1' || (
        savedMotion === null && (visitorCtx.saveData || Boolean(reducedMotionQuery && reducedMotionQuery.matches))
    );
    applyMotionPreference(initialPaused, false);

    if (reducedMotionQuery && typeof reducedMotionQuery.addEventListener === 'function') {
        reducedMotionQuery.addEventListener('change', (event) => {
            if (safeGetPref('calmStaticView') === null) {
                applyMotionPreference(event.matches, false);
            }
        });
    }

    initHorizonToyExperience();
    applyLanguage(currentLang);
    runWebBodyCensus();

    const weatherOptBtn = document.getElementById('weatherOptInBtn');
    if (weatherOptBtn) {
        weatherOptBtn.addEventListener('click', () => requestLiveLocationWeather(weatherOptBtn));
    }

    if (document.getElementById('home')) {
        const rawHash = window.location.hash || '';
        const initialSec = resolveSectionIdFromHash(rawHash);
        showSection(initialSec);
        if (rawHash.trim().toLowerCase() === '#mystery' && window.history && typeof window.history.replaceState === 'function') {
            window.history.replaceState({ section: 'mystery' }, '', '#eventwhisperer');
        }
    }

    const selectedOption = document.getElementById('selectedLanguage');
    const optionsContainer = document.querySelector('.options-container');
    const optionsList = Array.from(document.querySelectorAll('.option'));

    const closeLangMenu = (restoreFocus) => {
        if (optionsContainer) optionsContainer.classList.remove('show');
        if (selectedOption) {
            selectedOption.setAttribute('aria-expanded', 'false');
            if (restoreFocus) selectedOption.focus();
        }
    };

    const openLangMenu = () => {
        if (!optionsContainer || !selectedOption) return;
        optionsContainer.classList.add('show');
        selectedOption.setAttribute('aria-expanded', 'true');
        const activeOption = optionsList.find(o => o.classList.contains('active')) || optionsList[0];
        if (activeOption) activeOption.focus();
    };

    const toggleLangMenu = () => {
        if (!optionsContainer) return;
        if (optionsContainer.classList.contains('show')) {
            closeLangMenu(false);
        } else {
            openLangMenu();
        }
    };

    if (selectedOption && optionsContainer) {
        selectedOption.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleLangMenu();
        });
        selectedOption.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
                event.preventDefault();
                event.stopPropagation();
                openLangMenu();
            } else if (event.key === 'Escape') {
                closeLangMenu(false);
            }
        });
    }

    optionsList.forEach((option, idx) => {
        option.addEventListener('click', (event) => {
            event.stopPropagation();
            const lang = option.getAttribute('data-lang');
            applyLanguage(lang);
            closeLangMenu(true);
        });
        option.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const lang = option.getAttribute('data-lang');
                applyLanguage(lang);
                closeLangMenu(true);
            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                const next = optionsList[(idx + 1) % optionsList.length];
                if (next) next.focus();
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                const prev = optionsList[(idx - 1 + optionsList.length) % optionsList.length];
                if (prev) prev.focus();
            } else if (event.key === 'Home') {
                event.preventDefault();
                if (optionsList[0]) optionsList[0].focus();
            } else if (event.key === 'End') {
                event.preventDefault();
                if (optionsList[optionsList.length - 1]) optionsList[optionsList.length - 1].focus();
            } else if (event.key === 'Escape') {
                event.preventDefault();
                closeLangMenu(true);
            }
        });
    });

    if (optionsContainer) {
        document.addEventListener('click', () => closeLangMenu(false));
    }

    const motionToggle = document.getElementById('motionToggle');
    if (motionToggle) {
        motionToggle.addEventListener('click', () => {
            const nextPaused = !document.body.classList.contains('is-motion-paused');
            applyMotionPreference(nextPaused, true);
        });
    }

    document.addEventListener('click', (event) => {
        const link = event.target && event.target.closest ? event.target.closest('a[href^="#"]') : null;
        if (!link || !document.getElementById('home')) return;
        const href = (link.getAttribute('href') || '').trim();
        if (href === '#broccoliButton') {
            event.preventDefault();
            showSection('home');
            const btnEl = document.getElementById('broccoliButton');
            if (btnEl) btnEl.focus();
            if (window.location.hash && window.history && typeof window.history.pushState === 'function') {
                window.history.pushState({ section: 'home' }, '', window.location.pathname + window.location.search);
            }
            return;
        }
        if (href.length > 1) {
            const targetId = resolveSectionIdFromHash(href);
            if (document.getElementById(targetId)) {
                event.preventDefault();
                showSection(targetId);
                const nextHash = canonicalHashForSection(targetId);
                const nextUrl = nextHash || (window.location.pathname + window.location.search);
                if (window.location.hash !== nextHash && window.history && typeof window.history.pushState === 'function') {
                    window.history.pushState({ section: targetId }, '', nextUrl);
                }
                window.scrollTo(0, 0);
            }
        }
    });

    const worldTimeAnchor = document.getElementById('worldTimeAnchor');
    if (worldTimeAnchor) {
        window.setInterval(() => {
            worldTimeAnchor.textContent = formatWorldAnchor(new Date(), currentLang);
        }, 30000);
    }

    initCloudAtmosphere();

    const syncSectionFromLocation = () => {
        if (!document.getElementById('home')) return;
        showSection(resolveSectionIdFromHash(window.location.hash));
    };
    window.addEventListener('popstate', syncSectionFromLocation);
    window.addEventListener('hashchange', syncSectionFromLocation);
});

// Functie om secties weer te geven/verbergen met exact één actief HTML5 <main>-landmark
function showSection(sectionId) {
    const resolvedId = sectionId || 'home';
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.hidden = true;
        section.style.display = 'none';
    });

    const target = document.getElementById(resolvedId) || document.getElementById('home');
    if (target) {
        target.hidden = false;
        target.style.display = target.id === 'home' ? 'flex' : 'block';
    }
    if (document.body) {
        document.body.classList.toggle('is-world-calm', Boolean(target && target.id === 'home' && toyState.isFiltered));
    }

    updateContentLanguage(currentLang);
}

function updateContentLanguage(lang) {
    const safeLang = normalizeSupportedLang(lang) || currentLang || 'en';
    const contentElements = document.querySelectorAll('.intro-content, .privacy-content');
    contentElements.forEach(element => {
        element.style.display = element.getAttribute('data-lang') === safeLang ? 'block' : 'none';
    });
}

function resolveItemText(scene, item, lang) {
    if (item.dynamicFirstAppointment) {
        if (visitorCtx.isWeekend && scene.careWeekend) {
            return scene.careWeekend;
        }
        const formatted = formatLocalTime(scene.careHour || 10, scene.careMinute || 30, lang);
        return (scene.careWeekdayTemplate || '{time}').replace('{time}', formatted);
    }
    return item.text;
}

function initHorizonToyExperience() {
    const home = document.getElementById('home');
    if (!home) return;

    const horizonLine = home.querySelector('.horizon-line');
    const button = document.getElementById('broccoliButton');
    const whisperEl = document.getElementById('horizonWhisper');
    const liveRegion = document.getElementById('calmLiveRegion');
    const moreLinks = Array.from(home.querySelectorAll('.intro-content'));

    const horizonStage = document.createElement('div');
    horizonStage.className = 'home-horizon-stage';
    if (horizonLine) {
        horizonStage.appendChild(horizonLine);
    }

    const ripple = document.createElement('div');
    ripple.className = 'horizon-ripple';
    ripple.setAttribute('aria-hidden', 'true');
    horizonStage.appendChild(ripple);

    const startWing = document.createElement('div');
    startWing.className = 'horizon-wing horizon-wing--start';

    const orbStage = document.createElement('div');
    orbStage.className = 'orb-stage';
    if (button) {
        orbStage.appendChild(button);
    }

    const endWing = document.createElement('div');
    endWing.className = 'horizon-wing horizon-wing--end';

    horizonStage.appendChild(startWing);
    horizonStage.appendChild(orbStage);
    horizonStage.appendChild(endWing);

    const rhythmNav = document.createElement('nav');
    rhythmNav.className = 'day-rhythm-nav';
    const rhythmKeys = ['morning', 'afternoon', 'evening'];
    const rhythmButtons = [];
    rhythmKeys.forEach((key, idx) => {
        if (idx > 0) {
            const sep = document.createElement('span');
            sep.className = 'day-rhythm-sep';
            sep.setAttribute('aria-hidden', 'true');
            sep.textContent = '\u00B7';
            rhythmNav.appendChild(sep);
        }
        const rBtn = document.createElement('button');
        rBtn.type = 'button';
        rBtn.className = 'day-rhythm-btn';
        rBtn.setAttribute('data-daypart-key', key);
        rBtn.setAttribute('data-scene-idx', String(idx));
        rBtn.setAttribute('aria-current', idx === toyState.sceneIdx ? 'true' : 'false');
        rhythmButtons.push(rBtn);
        rhythmNav.appendChild(rBtn);
    });

    const moreStage = document.createElement('div');
    moreStage.className = 'home-more-stage';
    moreLinks.forEach(card => moreStage.appendChild(card));

    const ctxRow = home.querySelector('.world-context-row');
    if (ctxRow) {
        home.insertBefore(horizonStage, ctxRow.nextSibling);
    } else {
        home.appendChild(horizonStage);
    }
    if (whisperEl) {
        home.appendChild(whisperEl);
    }
    home.appendChild(rhythmNav);
    home.appendChild(moreStage);

    const renderScene = () => {
        const tr = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.en;
        const scene = tr.scenes[toyState.sceneIdx % tr.scenes.length] || tr.scenes[0];

        startWing.textContent = '';
        endWing.textContent = '';

        const realNotes = (toyState.sceneIdx === visitorCtx.initialSceneIdx)
            ? getActiveCensusNotes(currentLang)
            : [];
        let noteIdx = 0;

        let careCount = 0;
        const careTexts = [];

        scene.items.forEach(item => {
            const chip = document.createElement('div');
            chip.className = `day-moment ${item.kind === 'care' ? 'day-moment--care' : 'day-moment--noise'}`;
            if (toyState.isFiltered && item.kind !== 'care') {
                chip.setAttribute('aria-hidden', 'true');
            }

            const glyph = document.createElement('span');
            glyph.className = 'day-moment-glyph';
            glyph.setAttribute('aria-hidden', 'true');
            glyph.textContent = item.kind === 'care' ? '\u2726' : '\u25CB';

            const label = document.createElement('span');
            label.className = 'day-moment-label';

            let txt = '';
            if (item.kind === 'care' && noteIdx < realNotes.length) {
                txt = realNotes[noteIdx++];
            } else {
                txt = resolveItemText(scene, item, currentLang);
            }
            label.textContent = txt;

            chip.appendChild(glyph);
            chip.appendChild(label);

            if (item.wing === 0) {
                startWing.appendChild(chip);
            } else {
                endWing.appendChild(chip);
            }

            if (item.kind === 'care') {
                careCount++;
                careTexts.push(txt);
            }
        });

        home.classList.toggle('is-silent-horizon', toyState.isFiltered && careCount === 0);
        home.classList.toggle('is-horizon-calm', toyState.isFiltered);
        horizonStage.classList.toggle('is-filtered', toyState.isFiltered);
        if (document.body) {
            document.body.classList.toggle('is-world-calm', Boolean(toyState.isFiltered) && !home.hidden);
        }

        if (whisperEl) {
            whisperEl.textContent = toyState.isFiltered ? scene.whisper : (scene.busyWhisper || '');
        }

        rhythmNav.setAttribute('aria-label', tr.dayRhythmAria || 'Moment of the day');
        rhythmButtons.forEach((rBtn, idx) => {
            const key = rhythmKeys[idx];
            if (tr.dayparts && tr.dayparts[key]) {
                rBtn.textContent = tr.dayparts[key];
            }
            rBtn.setAttribute('aria-current', idx === toyState.sceneIdx ? 'true' : 'false');
        });

        if (button) {
            button.setAttribute('aria-pressed', toyState.isFiltered ? 'true' : 'false');
            button.setAttribute(
                'aria-label',
                toyState.isFiltered ? tr.buttonNextAria : tr.buttonPressAria
            );
        }

        return { tr, scene, careTexts };
    };

    const announceState = (rendered) => {
        if (!liveRegion) return;
        const { tr, scene, careTexts } = rendered;
        if (toyState.isFiltered) {
            const details = careTexts.length ? careTexts.join(', ') : (scene.whisper || tr.announcedSilenceFallback);
            liveRegion.textContent = `${tr.announcedPrefixCalm} ${details}`;
        } else {
            liveRegion.textContent = `${tr.announcedPrefixBusy} ${scene.key}`;
        }
    };

    rhythmButtons.forEach((rBtn, idx) => {
        rBtn.addEventListener('click', () => {
            toyState.sceneIdx = idx;
            toyState.isFiltered = true;
            toyState.hasRevealedMore = true;
            home.classList.add('has-revealed-more');
            applyThemeForScene(idx, idx === visitorCtx.initialSceneIdx);

            ripple.classList.remove('is-pulsing');
            void ripple.offsetWidth;
            ripple.classList.add('is-pulsing');

            const rendered = renderScene();
            announceState(rendered);
        });
    });

    const handleButtonPress = () => {
        const nowMs = Date.now();
        if (toyState.lastClickMs && nowMs - toyState.lastClickMs < 650) {
            document.documentElement.style.setProperty('--calm-ease-dur', '1.45s');
        } else {
            document.documentElement.style.setProperty('--calm-ease-dur', '1.05s');
        }
        toyState.lastClickMs = nowMs;

        toyState.isFiltered = !toyState.isFiltered;
        if (toyState.isFiltered) {
            toyState.hasRevealedMore = true;
            home.classList.add('has-revealed-more');

            ripple.classList.remove('is-pulsing');
            void ripple.offsetWidth;
            ripple.classList.add('is-pulsing');

            if (
                typeof navigator !== 'undefined' &&
                typeof navigator.vibrate === 'function' &&
                !document.body.classList.contains('is-motion-paused')
            ) {
                try { navigator.vibrate(10); } catch (_) { /* negeer */ }
            }
        }

        const rendered = renderScene();
        announceState(rendered);
    };

    if (button) {
        button.addEventListener('pointerdown', () => {
            button.classList.add('is-pressing');
        });
        button.addEventListener('pointerup', () => button.classList.remove('is-pressing'));
        button.addEventListener('pointerleave', () => button.classList.remove('is-pressing'));
        button.addEventListener('pointercancel', () => button.classList.remove('is-pressing'));
        button.addEventListener('click', handleButtonPress);
    }

    toyState.refresh = () => {
        renderScene();
    };

    renderScene();
}

function randBetween(min, max) {
    return min + Math.random() * (max - min);
}

function initCloudAtmosphere() {
    const stage = document.querySelector('.moving-background');
    if (!stage) return;

    const filterPresets = {
        rook: 'contrast(1.52) brightness(0.84) saturate(1.18)',
        rook4: 'contrast(1.92) brightness(0.68) hue-rotate(-14deg) saturate(0.95)',
        mist2: 'contrast(1.94) brightness(0.66) hue-rotate(-18deg) saturate(0.9)',
        mist3: 'contrast(1.92) brightness(0.68) hue-rotate(-12deg) saturate(0.96)'
    };

    const makeDrift = (minDur, maxDur, baseY, allowCounterDrift) => {
        const dur = Number(randBetween(minDur, maxDur).toFixed(1));
        const reverse = allowCounterDrift && Math.random() < 0.35;
        const from = reverse ? randBetween(108, 122) : -randBetween(44, 58);
        const to = reverse ? -randBetween(44, 58) : randBetween(108, 122);
        return {
            y: `${(baseY + randBetween(-3, 3)).toFixed(1)}%`,
            from: Number(from.toFixed(1)),
            to: Number(to.toFixed(1)),
            dur,
            delay: Number((-randBetween(0.08 * dur, 0.92 * dur)).toFixed(1)),
            floatA: Math.round(randBetween(-9, 9)),
            floatB: Math.round(randBetween(-16, 16)),
            floatC: Math.round(randBetween(-8, 8)),
            scaleA: Number(randBetween(0.94, 1.01).toFixed(2)),
            scaleB: Number(randBetween(1.02, 1.07).toFixed(2))
        };
    };

    const randMorph = (lobe) => Object.assign({}, lobe, {
        morphDur: Number(randBetween(28, 52).toFixed(1)),
        morphDelay: Number((-randBetween(2, 30)).toFixed(1))
    });

    const planes = [
        {
            name: 'far',
            depth: 10,
            formations: [
                Object.assign(makeDrift(155, 215, 6, true), {
                    w: 'clamp(360px, 46vw, 720px)', h: 'clamp(170px, 24vh, 300px)',
                    glow: { lx: '12%', ly: '16%', lw: '76%', lh: '68%', bg: 'radial-gradient(ellipse at 50% 50%, rgba(165, 224, 175, 0.16) 0%, rgba(102, 187, 106, 0.06) 50%, transparent 74%)' },
                    lobes: [
                        randMorph({ img: 'images/mist2.jpg', filter: filterPresets.mist2, lx: '0%', ly: '12%', lw: '74%', lh: '84%', op: 0.62, rotA: '-4deg', rotB: '3deg' }),
                        randMorph({ img: 'images/rook.jpg', filter: filterPresets.rook, lx: '30%', ly: '0%', lw: '68%', lh: '92%', op: 0.56, rotA: '2deg', rotB: '-4deg' })
                    ]
                }),
                Object.assign(makeDrift(155, 215, 22, true), {
                    w: 'clamp(360px, 48vw, 740px)', h: 'clamp(180px, 26vh, 320px)',
                    glow: { lx: '14%', ly: '18%', lw: '74%', lh: '66%', bg: 'radial-gradient(ellipse at 50% 50%, rgba(165, 224, 175, 0.14) 0%, rgba(102, 187, 106, 0.05) 50%, transparent 74%)' },
                    lobes: [
                        randMorph({ img: 'images/rook4.jpg', filter: filterPresets.rook4, lx: '18%', ly: '6%', lw: '68%', lh: '88%', op: 0.58, rotA: '3deg', rotB: '-3deg' }),
                        randMorph({ img: 'images/mist2.jpg', filter: filterPresets.mist2, lx: '0%', ly: '18%', lw: '62%', lh: '76%', op: 0.52, rotA: '-5deg', rotB: '2deg' })
                    ]
                })
            ]
        },
        {
            name: 'mid',
            depth: 22,
            formations: [
                Object.assign(makeDrift(105, 150, 14, true), {
                    w: 'clamp(360px, 44vw, 680px)', h: 'clamp(200px, 28vh, 360px)',
                    glow: { lx: '14%', ly: '18%', lw: '74%', lh: '66%', bg: 'radial-gradient(ellipse at 50% 50%, rgba(185, 240, 195, 0.22) 0%, rgba(102, 187, 106, 0.09) 48%, transparent 74%)' },
                    lobes: [
                        randMorph({ img: 'images/rook4.jpg', filter: filterPresets.rook4, lx: '6%', ly: '4%', lw: '66%', lh: '88%', op: 0.68, rotA: '-3deg', rotB: '4deg' }),
                        randMorph({ img: 'images/mist3.jpg', filter: filterPresets.mist3, lx: '34%', ly: '12%', lw: '62%', lh: '84%', op: 0.6, rotA: '4deg', rotB: '-2deg' }),
                        randMorph({ img: 'images/rook.jpg', filter: filterPresets.rook, lx: '18%', ly: '22%', lw: '60%', lh: '74%', op: 0.56, rotA: '-2deg', rotB: '5deg' })
                    ]
                }),
                Object.assign(makeDrift(105, 150, 34, true), {
                    w: 'clamp(380px, 46vw, 720px)', h: 'clamp(210px, 30vh, 380px)',
                    glow: { lx: '18%', ly: '22%', lw: '68%', lh: '60%', bg: 'radial-gradient(ellipse at 50% 50%, rgba(165, 224, 175, 0.2) 0%, rgba(76, 175, 80, 0.08) 50%, transparent 74%)' },
                    lobes: [
                        randMorph({ img: 'images/mist2.jpg', filter: filterPresets.mist2, lx: '0%', ly: '10%', lw: '70%', lh: '82%', op: 0.66, rotA: '-4deg', rotB: '3deg' }),
                        randMorph({ img: 'images/rook4.jpg', filter: filterPresets.rook4, lx: '30%', ly: '0%', lw: '64%', lh: '90%', op: 0.6, rotA: '3deg', rotB: '-4deg' })
                    ]
                }),
                Object.assign(makeDrift(105, 150, 42, true), {
                    w: 'clamp(340px, 42vw, 660px)', h: 'clamp(190px, 26vh, 340px)',
                    glow: { lx: '14%', ly: '18%', lw: '72%', lh: '62%', bg: 'radial-gradient(ellipse at 50% 50%, rgba(175, 232, 185, 0.18) 0%, rgba(76, 175, 80, 0.07) 50%, transparent 74%)' },
                    lobes: [
                        randMorph({ img: 'images/rook.jpg', filter: filterPresets.rook, lx: '10%', ly: '6%', lw: '72%', lh: '86%', op: 0.64, rotA: '4deg', rotB: '-3deg' }),
                        randMorph({ img: 'images/mist3.jpg', filter: filterPresets.mist3, lx: '34%', ly: '16%', lw: '58%', lh: '78%', op: 0.56, rotA: '-3deg', rotB: '4deg' })
                    ]
                })
            ]
        },
        {
            name: 'horizon',
            depth: 34,
            formations: [
                Object.assign(makeDrift(125, 170, 54, true), {
                    w: 'clamp(420px, 54vw, 820px)', h: 'clamp(180px, 24vh, 310px)',
                    glow: { lx: '10%', ly: '18%', lw: '82%', lh: '64%', bg: 'radial-gradient(ellipse at 50% 56%, rgba(208, 255, 214, 0.24) 0%, rgba(102, 187, 106, 0.1) 48%, transparent 76%)' },
                    lobes: [
                        randMorph({ img: 'images/rook.jpg', filter: filterPresets.rook, lx: '0%', ly: '8%', lw: '68%', lh: '88%', op: 0.66, rotA: '-2deg', rotB: '3deg' }),
                        randMorph({ img: 'images/rook4.jpg', filter: filterPresets.rook4, lx: '32%', ly: '14%', lw: '64%', lh: '80%', op: 0.58, rotA: '2deg', rotB: '-3deg' })
                    ]
                }),
                Object.assign(makeDrift(125, 170, 62, true), {
                    w: 'clamp(400px, 50vw, 780px)', h: 'clamp(170px, 22vh, 290px)',
                    glow: { lx: '16%', ly: '20%', lw: '74%', lh: '60%', bg: 'radial-gradient(ellipse at 50% 50%, rgba(180, 245, 190, 0.2) 0%, rgba(76, 175, 80, 0.08) 52%, transparent 74%)' },
                    lobes: [
                        randMorph({ img: 'images/mist2.jpg', filter: filterPresets.mist2, lx: '10%', ly: '6%', lw: '72%', lh: '84%', op: 0.6, rotA: '-3deg', rotB: '2deg' }),
                        randMorph({ img: 'images/rook.jpg', filter: filterPresets.rook, lx: '34%', ly: '16%', lw: '62%', lh: '78%', op: 0.6, rotA: '3deg', rotB: '-2deg' })
                    ]
                })
            ]
        }
    ];

    const frag = document.createDocumentFragment();
    const clearingEl = document.createElement('div');
    clearingEl.className = 'ambient-clearing';
    clearingEl.setAttribute('aria-hidden', 'true');
    frag.appendChild(clearingEl);

    planes.forEach(plane => {
        const layer = document.createElement('div');
        layer.className = `cloud-parallax-layer cloud-parallax-layer--${plane.name}`;
        layer.style.setProperty('--depth', `${plane.depth}px`);
        plane.formations.forEach(cfg => layer.appendChild(createCloudFormation(cfg)));
        frag.appendChild(layer);
    });

    // Zachte Ghibli aquarel-heuvellijnen onderaan (afgeleid van ComposeScreen.kt)
    const hillsSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    hillsSvg.setAttribute('class', 'ambient-hills');
    hillsSvg.setAttribute('viewBox', '0 0 1200 260');
    hillsSvg.setAttribute('preserveAspectRatio', 'none');
    hillsSvg.setAttribute('aria-hidden', 'true');
    const hillPaths = [
        { cls: 'ambient-hill-1', d: 'M0,130 C176,54 366,184 586,132 C808,78 978,184 1200,118 L1200,260 L0,260 Z' },
        { cls: 'ambient-hill-2', d: 'M0,174 C196,112 396,214 600,180 C808,144 1006,216 1200,184 L1200,260 L0,260 Z' },
        { cls: 'ambient-hill-3', d: 'M0,210 C196,184 406,244 600,218 C822,190 1022,246 1200,224 L1200,260 L0,260 Z' }
    ];
    hillPaths.forEach(hp => {
        const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        p.setAttribute('class', hp.cls);
        p.setAttribute('d', hp.d);
        hillsSvg.appendChild(p);
    });
    frag.appendChild(hillsSvg);

    // Subtiele zonnestofjes overdag / stille sterrenpunten 's nachts
    const motesLayer = document.createElement('div');
    motesLayer.className = 'ambient-motes';
    const motePositions = [
        { x: 6.7, y: 24, r: 2.5, d: 11, del: -2 },
        { x: 14.3, y: 15, r: 2, d: 13, del: -6 },
        { x: 21.5, y: 38, r: 2.8, d: 9, del: -4 },
        { x: 28.5, y: 12, r: 2.2, d: 14, del: -8 },
        { x: 35.2, y: 66, r: 2.4, d: 12, del: -1 },
        { x: 41.0, y: 21, r: 2, d: 15, del: -9 },
        { x: 59.3, y: 18, r: 2.2, d: 10, del: -3 },
        { x: 67.8, y: 29, r: 2.8, d: 13, del: -7 },
        { x: 74.2, y: 14, r: 2.1, d: 11, del: -5 },
        { x: 83.6, y: 34, r: 2.6, d: 14, del: -2 },
        { x: 89.4, y: 22, r: 2.2, d: 12, del: -10 },
        { x: 92.1, y: 64, r: 3, d: 16, del: -6 },
        { x: 11.5, y: 62, r: 2.8, d: 13, del: -4 },
        { x: 79.0, y: 68, r: 2.4, d: 15, del: -8 }
    ];
    motePositions.forEach(m => {
        const dot = document.createElement('span');
        dot.className = 'ambient-mote';
        dot.style.left = `${m.x}%`;
        dot.style.top = `${m.y}%`;
        dot.style.width = `${m.r}px`;
        dot.style.height = `${m.r}px`;
        dot.style.setProperty('--twinkle-dur', `${m.d}s`);
        dot.style.setProperty('--twinkle-delay', `${m.del}s`);
        motesLayer.appendChild(dot);
    });
    frag.appendChild(motesLayer);

    // Zeldzame zwijgende natuurmomentjes aan de buitenrand van het blikveld (Klara x Ghibli Ma)
    const starEl = document.createElement('div');
    starEl.className = 'shooting-star';
    frag.appendChild(starEl);

    stage.appendChild(frag);
    bindCloudParallax(stage);
    schedulePeripheralWonder(stage, starEl, true);
}

function schedulePeripheralWonder(stage, starEl, isInitial) {
    const delayMs = isInitial
        ? (7500 + Math.random() * 4500)
        : (15000 + Math.random() * 19000);

    window.setTimeout(() => {
        const body = document.body;
        if (
            body &&
            !body.classList.contains('is-motion-paused') &&
            document.visibilityState !== 'hidden'
        ) {
            const sky = body.getAttribute('data-sky');
            const isLeftEdge = Math.random() < 0.5;
            const edgeX = isLeftEdge ? (6 + Math.random() * 14) : (80 + Math.random() * 13);

            if (sky === 'night') {
                if (Math.random() < 0.7) {
                    const glint = document.createElement('span');
                    glint.className = 'ambient-wonder wonder-star-glint';
                    glint.setAttribute('aria-hidden', 'true');
                    glint.style.left = `${edgeX.toFixed(1)}%`;
                    glint.style.top = `${(9 + Math.random() * 17).toFixed(1)}%`;
                    stage.appendChild(glint);
                    window.setTimeout(() => { glint.remove(); }, 3400);
                } else {
                    const startX = isLeftEdge ? (10 + Math.random() * 16) : (58 + Math.random() * 16);
                    starEl.style.setProperty('--star-x', `${startX.toFixed(1)}%`);
                    starEl.style.setProperty('--star-y', `${(9 + Math.random() * 15).toFixed(1)}%`);
                    starEl.style.setProperty('--star-angle', `${(16 + Math.random() * 12).toFixed(1)}deg`);
                    starEl.classList.remove('is-streaking');
                    void starEl.offsetWidth;
                    starEl.classList.add('is-streaking');
                }
            } else {
                if (Math.random() < 0.55) {
                    const sunGlint = document.createElement('span');
                    sunGlint.className = 'ambient-wonder wonder-sun-glint';
                    sunGlint.setAttribute('aria-hidden', 'true');
                    sunGlint.style.left = `${edgeX.toFixed(1)}%`;
                    sunGlint.style.top = `${(10 + Math.random() * 15).toFixed(1)}%`;
                    stage.appendChild(sunGlint);
                    window.setTimeout(() => { sunGlint.remove(); }, 4400);
                } else {
                    const seed = document.createElement('span');
                    seed.className = 'ambient-wonder wonder-seed';
                    seed.setAttribute('aria-hidden', 'true');
                    seed.style.left = `${edgeX.toFixed(1)}%`;
                    seed.style.top = `${(60 + Math.random() * 18).toFixed(1)}%`;
                    const dx = (isLeftEdge ? 1 : -1) * (32 + Math.random() * 28);
                    const dy = -(18 + Math.random() * 18);
                    seed.style.setProperty('--seed-dx', `${dx.toFixed(0)}px`);
                    seed.style.setProperty('--seed-dy', `${dy.toFixed(0)}px`);
                    stage.appendChild(seed);
                    window.setTimeout(() => { seed.remove(); }, 6800);
                }
            }
        }
        schedulePeripheralWonder(stage, starEl, false);
    }, delayMs);
}

function createCloudFormation(cfg) {
    const formation = document.createElement('div');
    formation.className = 'cloud-formation';
    const midX = ((cfg.from + cfg.to) / 2).toFixed(1);
    formation.style.setProperty('--y', cfg.y);
    formation.style.setProperty('--w', cfg.w);
    formation.style.setProperty('--h', cfg.h);
    formation.style.setProperty('--from-x', `${cfg.from}vw`);
    formation.style.setProperty('--mid-x', `${midX}vw`);
    formation.style.setProperty('--to-x', `${cfg.to}vw`);
    formation.style.setProperty('--dur', `${cfg.dur}s`);
    formation.style.setProperty('--delay', `${cfg.delay}s`);
    formation.style.setProperty('--float-a', `${cfg.floatA}px`);
    formation.style.setProperty('--float-b', `${cfg.floatB}px`);
    formation.style.setProperty('--float-c', `${cfg.floatC}px`);
    formation.style.setProperty('--scale-a', String(cfg.scaleA));
    formation.style.setProperty('--scale-b', String(cfg.scaleB));

    if (cfg.glow) {
        const glow = document.createElement('div');
        glow.className = 'cloud-glow';
        glow.style.setProperty('--lx', cfg.glow.lx);
        glow.style.setProperty('--ly', cfg.glow.ly);
        glow.style.setProperty('--lw', cfg.glow.lw);
        glow.style.setProperty('--lh', cfg.glow.lh);
        glow.style.setProperty('--glow-bg', cfg.glow.bg);
        formation.appendChild(glow);
    }

    if (!visitorCtx.saveData) {
        cfg.lobes.forEach(lobeCfg => {
            const lobe = document.createElement('div');
            lobe.className = 'cloud-lobe';
            lobe.style.setProperty('--img', `url('${lobeCfg.img}')`);
            lobe.style.setProperty('--lobe-filter', lobeCfg.filter);
            lobe.style.setProperty('--lx', lobeCfg.lx);
            lobe.style.setProperty('--ly', lobeCfg.ly);
            lobe.style.setProperty('--lw', lobeCfg.lw);
            lobe.style.setProperty('--lh', lobeCfg.lh);
            lobe.style.setProperty('--lobe-opacity', String(lobeCfg.op));
            lobe.style.setProperty('--morph-dur', `${lobeCfg.morphDur}s`);
            lobe.style.setProperty('--morph-delay', `${lobeCfg.morphDelay}s`);
            lobe.style.setProperty('--rot-a', lobeCfg.rotA);
            lobe.style.setProperty('--rot-b', lobeCfg.rotB);
            formation.appendChild(lobe);
        });
    }

    return formation;
}

function bindCloudParallax(stage) {
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let rafId = null;

    const tick = () => {
        curX += (targetX - curX) * 0.06;
        curY += (targetY - curY) * 0.06;
        stage.style.setProperty('--px', curX.toFixed(3));
        stage.style.setProperty('--py', curY.toFixed(3));

        if (Math.abs(targetX - curX) > 0.002 || Math.abs(targetY - curY) > 0.002) {
            rafId = window.requestAnimationFrame(tick);
        } else {
            rafId = null;
        }
    };

    document.addEventListener('pointermove', (event) => {
        if (document.body && document.body.classList.contains('is-motion-paused')) return;
        if (!window.innerWidth || !window.innerHeight) return;
        targetX = (event.clientX / window.innerWidth) * 2 - 1;
        targetY = (event.clientY / window.innerHeight) * 2 - 1;
        if (!rafId) {
            rafId = window.requestAnimationFrame(tick);
        }
    }, { passive: true });
}
