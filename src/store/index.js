//index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errors: {},
    itemImage: null,
    modalOpened: false,
    modalData: [],
    jobCards: [
      {
        id: 1 ,
        imgsrc: 'https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-15/e35/130994531_211067403864741_4615914408695780444_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Q1SLH-sCjKMAX86Lj3X&tp=1&oh=1f8f1d1661ca69c6c84a08b8f1bdfb06&oe=6059C25C',
        jobTitle: 'Cantero central en Canning',
        title: 'Cruz del Sur - Canning',
        content1: 'Se resolvió con especies resistentes como nepetas, cariopteris,rosas iceberg, erigerones, santolinas y una cyca enmarcada por salvias farinaceas blancas ,ericas y alisum.',
        content2: 'Para el desnivel dos terrazas contenidas con durmientes. Siempre con la colaboración y la confianza de los propietarios ,Diego y Adriana. Muchas gracias!',
        image1: 'https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-15/e35/130529748_203825064631653_3427149001728837793_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=IN_ex3dlDaIAX-tslmF&tp=1&oh=91b33f428089580b9cc78f064cc0220e&oe=605977D1',
        image2: 'https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-15/e35/151238781_110371754321966_71252817233672078_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=xIoxsBVYsAUAX9QQp1P&tp=1&oh=937da9d51d040dd5a5230a8baff91b61&oe=6057F295',
        footer: 'https://www.instagram.com/p/CLcbTVgJd4L/',
        resume: 'En el barrio Cruz del Sur. Mucho sol y mucha pendiente.'
      },
      {
        id: 2 ,
        imgsrc:  'https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-15/e35/133541573_2292756347514717_1537342674543310836_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=542i-S9_qz4AX8KM_f-&tp=1&oh=aed3cbb4298137d04b24e2bc315a3f99&oe=605A4B09',
        jobTitle: 'Colocación de grama',
        title: 'Cruz del Sur - Canning',
        content1: 'Primer corte de la grama después de 20 días de terminar la nivelación y colocar los panes. Y esperando la magia de la lluvia.',
        content2: 'Los arbustos del cerco ,las azaleas legadas de la casa materna, el abeto o "pinito" , las palmeras de las macetas y el cantero del frente están cada vez mejor. Genial la foto del ocaso y la tranquera que me envió el propietario!! Diego y Adriana ,espero que disfruten de su nuevo jardín!!!!',
        image1: 'https://instagram.faep9-2.fna.fbcdn.net/v/t51.2885-15/e35/134381134_823949581534211_7319981590332023091_n.jpg?_nc_ht=instagram.faep9-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=b_j3OrHVcjgAX_Brpwn&tp=1&oh=d6f4382875572c4e534bae588b3b0275&oe=60571232',
        image2: 'https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-15/e35/128132571_211769453832316_9061159552953064146_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=FTVN371GuGsAX9kgs_7&tp=1&oh=8f8365d3cf883816c2ffabac69e3f356&oe=60591F49',
        footer: 'https://www.instagram.com/p/CJZt1RvJlqy/',
        resume: 'En el barrio Cruz del Sur. Instalación de grama y mantenimiento.'
      },
      {
        id: 3 ,
        imgsrc:  'https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-15/e35/118537407_633068990943225_7563764460818758969_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=MMXgIJvJ94EAX8k7rJe&tp=1&oh=619feedd15517ba03d3c5cbe86579b56&oe=605790EA',
        jobTitle: 'Cantero',
        title: 'Barrio Santa Rita - Canning',
        content1: 'Segundo año y terminando los canteros del frente ,trabajo interrumpido por la cuarentena.',
        content2: 'Este es el momento en que todo crece vertiginosamente así que pronto va a lucir mejor aun. Gracias Mariano y familia por confiar en mi trabajo,da gusto trabajar con gente como ustedes.🌞🍀🌱',
        image1: 'https://instagram.faep9-2.fna.fbcdn.net/v/t51.2885-15/e35/118398348_326945228717461_1264111990886771319_n.jpg?_nc_ht=instagram.faep9-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=q38LRcnxK0MAX8dsTTL&tp=1&oh=37b52ab5bacac0c10a526e6d4f43a460&oe=6057581A',
        image2: 'https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-15/e35/118452999_905407003285526_7802602726706231986_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=KmOwcAUo9W4AX-jmFgG&tp=1&oh=33ef837f9c184bc70d68d5907d035fef&oe=6059C007',
        footer: 'https://www.instagram.com/p/CEaIa39BcMf/',
        resume: 'En el barrio Santa Rita. Realización de cantero y mantenimiento.'
      }
    ]
  },

  getters: {
    errors(state) {
      return state.errors;
    }
  },

  mutations: {
    SET_ERRORS(state, data) {
      state.errors = data;
    },
    setImage (state, image) {
        state.itemImage = image
    },
    openModal (state, payload) {
      state.modalOpened = payload
    },
    setModalData (state, payload) {
      state.modalData = payload
    },
    resetModalData (state) {
      state.modalData = []
    }
  },

  actions: {
    setErrors({ commit }, errors) {
      commit("SET_ERRORS", errors);
    },
    POM_setImage ({ commit }, image) {
        commit('setImage', image)
    },
    MODAL_openModal ({ commit }, value) {
      commit('openModal', value)
    },
    MODAL_getModalData ({ commit, state }, idModal) {
      state.jobCards.forEach(job => {
        if (job.id === idModal) {
          commit('setModalData', job)
        }
      })
    },
    MODAL_resetData ({ commit }) {
      commit('resetModalData')
    }
  }
});