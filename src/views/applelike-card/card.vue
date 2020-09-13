<template>
  <div>
    <div ref="card" class="card" @click="onExpand($event)" :class="{ active: isExpand }">
      <img src="http://source.unsplash.com/900x600/?nature,water,1" />
      <div class="title">APP OF THE DAY</div>
      <div class="content-wrapper">
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris
          </p>
          <p>
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident,
          </p>
          <p>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
    <!-- <div class="card" @click="onExpand($event)" :class="{ active: isExpand }">
      <img src="http://source.unsplash.com/900x600/?nature,water,2" />
      <div class="title">APP OF THE DAY</div>
      <div class="content-wrapper">
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris
          </p>
          <p>
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident,
          </p>
          <p>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
    <div class="card" @click="onExpand($event)" :class="{ active: isExpand }">
      <img src="http://source.unsplash.com/900x600/?nature,water,3" />
      <div class="title">APP OF THE DAY</div>
      <div class="content-wrapper">
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris
          </p>
          <p>
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident,
          </p>
          <p>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
    <div class="card" @click="onExpand($event)" :class="{ active: isExpand }">
      <img src="http://source.unsplash.com/900x600/?nature,water,4" />
      <div class="title">APP OF THE DAY</div>
      <div class="content-wrapper">
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris
          </p>
          <p>
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident,
          </p>
          <p>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'card',
  components: {},
  data() {
    return {
      isExpand: false,
    };
  },
  created() {},
  mounted() {
  },
  methods: {
    onExpand(event) {
      let card = event.currentTarget;
      let cardOffset = card.getBoundingClientRect().top - this.getScrollTop();
      card.style.translateY = -1*cardOffset + 'px';
      console.log(cardOffset);
      console.log(card.style.translateY);
      this.isExpand = !this.isExpand;
    },
    getScrollTop() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      return scrollTop;
    },
  },
};
</script>

<style lang="scss" scope>
:root {
  font-size: 15px;
  font-family: Helvetica;

  --body-width: 480px;
  --card-width: 420px;
  --card-height: 280px;
  --img-height: 226px;
  --img-height-expanded: 320px;
}

body {
  width: var(--body-width);
  background-color: #eee;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 1rem, 0;
}

.card {
  width: var(--card-width);
  height: var(--card-height);
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 2rem rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  transition: 0.3s all cubic-bezier(0, 1, 0.95, 1.05);
}

.card img {
  display: block;
  width: 100%;
  height: var(--img-height);
  object-fit: cover;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.card .title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.8rem 1.2rem;
  background-color: #fff;
  line-height: 2rem;
  letter-spacing: -0.5px;
  padding-bottom: 0;
}

.card .content-wrapper {
  height: 0;
  overflow: hidden;
}

.card .content-wrapper .content {
  padding: 0 1.2rem;
  background-color: #fff;
  overflow: auto;
}

.card p {
  font-size: 1.2rem;
  line-height: 1.5rem;
}

.card.active {
  transform: translateY(-200px) scale(calc(480 / 420));
  transform-origin: 50% 0;
  border-radius: 0;
}

.card.active .title {
}

.card.active img {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  height: var(--img-height-expanded);
}

.card.active .content-wrapper {
  height: 100vh;
}
</style>
