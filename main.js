Vue.component('phonetic',{
  props: ['prons'],
  template:`
  <div>
    <span class="country uk">UK</span>
    <i>/{{prons[0].text}}/</i>
    <button class="defAm">
      <i class="iconfont icon-laba"></i>
      <audio :src="prons[0].mp3" ></audio>
    </button>
    <span class="country us">US</span>
    <i>/{{prons[1].text}}/</i>
    <button>
      <i class="iconfont icon-laba"></i>
      <audio :src="prons[1].mp3"></audio>
    </button> 
  </div>`
})

Vue.component('mean', {
  props: ['means'],
  template: `
  <div>
    <p><em>{{means.defInfo}}</em> {{means.defEn}}</p>
    <p>{{means.defCn}}</p>
  </div>`
})

Vue.component('senses', {
  props: ['sense'],
  template:`
  <div v-show="sense.guideword != ''" >
    <div>
      <i class="iconfont icon-start"></i>   
      <span>{{ sense.hw }}</span>
      <span>{{ sense.pos[0] }}</span>
      <span>[ {{ sense.guideword }} ]</span>
    </div>
    <div v-for="example in sense.examples">
      <p>{{example.en}}</p> 
      <p>{{example.cn}}</p>
    </div>
  </div>`
})

Vue.component('examples', {
  props: ['example'],
  template: `
  <div>
    <p>{{example.en}}</p>
    <p>{{example.cn}}</p>
  </div>`
})

var app = new Vue({
  el: '.app',
  data: {
    inputWord: '',
    searchWord: JSON.parse(localStorage.searchWord || '[]'),
    contents: JSON.parse(localStorage.contents || '[]'),
    histories: JSON.parse(localStorage.histories || '[]'),  
  },
  watch: {
    searchWord: function() {
      localStorage.searchWord = JSON.stringify(this.searchWord)
    },
    contents: function() {
      localStorage.contents = JSON.stringify(this.contents)
    },
    histories: function() {
      localStorage.histories = JSON.stringify(this.histories)
    }
  }, 
 methods: {
    search: function() {
      var that = this
      $.getJSON(`http://damiao.io:5000/word/${that.inputWord}`, (data)=>{
        that.contents = data
        that.searchWord = data[0].headword
        if(that.histories.indexOf(that.searchWord)){
            that.histories.push(that.searchWord)
        }
      })
    },
    del: function() {
      this.inputWord = ''
    },
    delHistory: function(index) {
      this.histories.splice(index,1)
    }
  }
})