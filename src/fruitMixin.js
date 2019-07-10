export const fruitMixin = {
  data() {
    return {
      fruits: ['Strawberry', 'Cherry', 'Banana', 'Watermelon', ' Lime'],
      filterText: '',
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    }
  }
}
