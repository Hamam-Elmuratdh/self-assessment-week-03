angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div ng-repeat= "fish in $ctrl.fishes">
      <fish-table-row fish = "fish"></fish-table-row>
     
    </div>`
});