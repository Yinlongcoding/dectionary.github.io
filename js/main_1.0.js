var app = new Vue({
    el: '.app',
    data: {
      inputWord: '',
      contentWords: '',
      contents: JSON.parse(localStorage.contents || '[]'),
      history:JSON.parse(localStorage.history || '[]'),
      words:JSON.parse(localStorage.words || '[]'),
      length:1,
      US:'',
      UK:'',
    },
    watch: {
      contents: function() {
        localStorage.contents = JSON.stringify(this.contents)
      },
      words: function() {
        localStorage.words = JSON.stringify(this.words)
      },
      history: function() {
        localStorage.history = JSON.stringify(this.history)
      }
    },
    methods: {
      search(event) {
        var self = this
        if(event.keyCode !== 38 && event.keyCode !== 40) { 
          $.getJSON(`http://damiao.io:5000/autocomplete/${self.inputWord}`,(data)=>{
            var contentWords = data['results']
            self.contentWords = contentWords.map(it=>it.searchtext)
          }) 
        }
        if(event.keyCode==13) {  
          $.getJSON(`http://damiao.io:5000/word/${self.inputWord}`,(data)=> {
          self.contents = data
          self.US = data[0].prons[1].mp3 
          self.UK = data[0].prons[0].mp3
          })
          if(self.history.indexOf(self.inputWord) == -1) { 
            self.history.push(self.inputWord)
          }
          self.length = 0                 
        }
        if(event.keyCode == 8) {
          self.contentWords = []
        }
      },
      up() {
       this.inputWord = this.contentWords[this.length]
       this.length == 0 ? this.length = 0 : this.length --
      },
      down() {
        this.inputWord = this.contentWords[this.length]
        this.length == this.contentWords.length - 1 ? this.length = this.contentWords.length - 1 : this.length ++
      },
      addWord() {
         if(this.words.indexOf(this.inputWord) == -1 && this.inputWord !== '') {
          this.words.push(this.inputWord)
         }
      },
      lessWord() {
        var judg = this.words.indexOf(this.inputWord)
        this.words.splice(judg,1) 
      },
      clearHistory() {
        this.history = []
      },
      wordsLess(index) {
        this.words.splice(index,1)
      },
      historyLess(index) {
        this.history.splice(index,1)
      },
      selectWord(index) {
        this.inputWord = this.contentWords[index]
        $.getJSON(`http://damiao.io:5000/word/${this.inputWord}`,(data)=> {
          this.contents = data
          })
      }
    }
  })
    $('.defAm').click(function() {
      $('.defAm audio')[0].play()
    })

    $('.defEn').click(function() {
      $('.defEn audio')[0].play()
    })