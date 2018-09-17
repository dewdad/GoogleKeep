import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export interface Note {
  id?: string,
  name?: string,
  type?: string,
  noteTitle?: string,
  noteContent?: string,
  status?: string,
  width?: Number,
  height?: Number
}
export interface State {
  noteList: Array<Note>,
  listType: string
}

// 初始化state
const state: State = {
  noteList: new Array<Note>(),
  listType: 'mdi-view-stream'
}

export default new Vuex.Store({
  state: state,
  mutations: {
    changeListType (state: State, listType: string) {
      if (listType === 'mdi-view-stream') {
        state.listType = 'mdi-view-dashboard-variant'
      } else {
        state.listType = 'mdi-view-stream'
      }
    },
    setNoteList (state: State, noteList: Array<Note>) {
      state.noteList = noteList
    },
    addNote (state: State, note: Note) {
      console.dir(note)
      state.noteList.push(note)
    },
    deleteNote (state: State, note: Note) {
      // TODO 此处的算法需要优化
      let temp: Array<Note>;
      temp = state.noteList.filter(item => item.id !== note.id)
      console.dir(temp)
      state.noteList = temp
    }
  },
  actions: {

  }
})
