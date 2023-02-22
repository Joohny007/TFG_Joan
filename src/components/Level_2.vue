<template>
    <h1>3r día: Soluciones</h1>
    <div class="gameArea">
        <h3>{{results}}</h3>
        <h4>Current Box: {{ currVal }}</h4>
        <div class="boxHolder">
            <div class="box"
                v-for="(box, index) in boxData" :key="index"
                >
                <button
                    :id="'box_' + index"
                    :class="box.show ? 'show' : '' "
                    @click="showBox(index, box.value)">
                    <p v-if="!box.show">Click Here</p>
                    <span>{{ box.value }}</span>
                </button>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        name: "Level_2",
        data() {
            return {
                boxData: [
                    { id:1, value: "a😁", show: false },
                    { id:2, value: "a😎", show: false },
                    { id:3, value: "a😎", show: false },
                    { id:4, value: "a😁", show: false },
                    { id:5, value: "a🤑", show: false },
                    { id:6, value: "a🥰", show: false },
                    { id:7, value: "a🥰", show: false },
                    { id:8, value: "a🤑", show: false },
                    { id:9, value: "a🤑", show: false },
                    { id:10, value: "a🥰", show: false },
                    { id:11, value: "a🥰", show: false },
                    { id:12, value: "a🤑", show: false },
                ],
                currVal: null,
                result: ''
            }
        },
        methods: {
            showBox(_id, _value) {
                if (this.boxData[_id].show) {
                    return;
                }

                this.boxData[_id].show = true;
                const button = document.getElementById(`box_${_id}`);
                button.classList.add("show");

                if (this.currVal === null) {
                    this.currVal = _value;
                } else if (_value === this.currVal) {
                    this.result = "Great!";
                    this.currVal = null;
                } else {
                    this.result = "Try Again!";
                    this.boxData.map(box => box.show = false);
                    setTimeout(() => {
                        this.boxData[_id].show = false;
                        const button = document.getElementById(`box_${_id}`);
                        button.classList.remove("show");
                    }, 1000);
                    this.currVal = null;
                }
            }
        }
    }
    </script>
  
  <style scoped>
  * {
    transition: all 0.5s;
  }
  .gameArea {
    width: 100%;
    float: left;
  }
  .boxHolder {
    display: block;
    width: auto;
    margin: 0 auto;
  }
  .box {
    width: 200px;
    float: left  
}

.box button { 
    width: 100%;
    height: 100px;
    border: 1px solid #ddd;
    border-radius: 0;
}

button p {
    margin-top: 46px;
    margin-bottom: 0;
}

button.show p { margin: 0; }

.box button span {
    font-size: 50px;
    display: none;
}

.box button.show span {
    display: block;
}

.box button.match {
    border-color: green;
}

</style>