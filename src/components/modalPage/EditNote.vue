<template>
  <v-dialog v-model="dialog">
    <v-card>
      <v-card-title primary-title>
        <v-layout align-start row wrap>
          <v-flex xs12>
            <v-text-field autofocus flat full-width v-model="note.noteTitle" label="标题" single-line solo>
              <div slot="append">
                <v-spacer></v-spacer>

                <v-btn small icon>
                  <v-icon small color="grey">mdi-pin</v-icon>
                </v-btn>
              </div>
            </v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-textarea full-width auto-grow flat solo name="input-7-4" placeholder="添加记事..." label="Solo textarea" v-model="note.noteContent"></v-textarea>
          </v-flex>
        </v-layout>

      </v-card-title>

      <v-card-actions>
        <v-btn small icon>
          <v-icon small color="grey">mdi-reminder</v-icon>
        </v-btn>
        <v-btn small icon>
          <v-icon small color="grey">mdi-account-plus</v-icon>
        </v-btn>
        <v-btn small icon>
          <v-icon small color="grey">mdi-palette</v-icon>
        </v-btn>
        <v-btn small icon>
          <v-icon small color="grey">image</v-icon>
        </v-btn>
        <v-btn small icon>
          <v-icon small color="grey">mdi-package-down</v-icon>
        </v-btn>
        <v-btn small icon>
          <v-icon small color="grey">mdi-dots-vertical</v-icon>
        </v-btn>
        <v-btn small icon>
          <v-icon small color="grey">mdi-undo</v-icon>
        </v-btn>
        <v-btn small icon>
          <v-icon small color="grey">mdi-redo</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="close" small flat color="grey">关闭</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'edit-note',
  data () {
    return {
      dialog: false
    }
  },
  mounted () {
    let me = this
    me.$bus.$on('showEditNote', function (arg) {
      me.dialog = true
      console.dir(arg)
    })
  }
}
</script>
