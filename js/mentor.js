 const app=new Vue({
          el : '#mentors',
          data : {
              mentors : []
          },
          created() {
              fetch('https://github.com/shyam49/OpenCode-Collaborative/blob/master/mentors.json')
            .then(response => response.json() )
            .then(json => {
                this.mentors = json.mentors
            })
          }
      })
