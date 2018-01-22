import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    click: function(someskill) {
      var name = document.getElementsByClassName("skill-name");
      for (var i = 0; i < name.length; i++) {
        name[i].style.textDecoration = 'none';
      }
      var details = document.getElementsByClassName("skill-detail");
      for (var i = 0; i < details.length; i++) {
        details[i].style.fontWeight = 'normal'
      }
  		document.getElementById(someskill.id.toString() + '-d' ).style.fontWeight = '900';
      document.getElementById(someskill.id.toString() + '-n' ).style.textDecoration = 'underline';
    }
  }
});
