<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
   <ul>
       <li>1</li>
       <li>2</li>
       <li>3</li>
       <li>4</li>
       <li>5</li>
       <li>6</li>
       <li>7</li>
       <li>8</li>
       <li>9</li>
       <li>10</li>
       <li>11</li>
       <li>12</li>
       <li>13</li>
       <li>14</li>
       <li>15</li>
       <li>16</li>
       <li>17</li>
       <li>18</li>
       <li>19</li>
       <li>20</li>
       <li>21</li>
       <li>22</li>
       <li>23</li>
       <li>24</li>
       <li>25</li>
       <li>26</li>
       <li>27</li>
       <li>28</li>
       <li>29</li>
       <li>30</li>
       <li>31</li>
       <li>32</li>
       <li>33</li>
       <li>34</li>
       <li>35</li>
       <li>36</li>
       <li>37</li>
       <li>38</li>
       <li>39</li>
       <li>40</li>
       <li>41</li>
       <li>42</li>
       <li>43</li>
       <li>44</li>
       <li>45</li>
       <li>46</li>
       <li>47</li>
       <li>48</li>
       <li>49</li>
       <li>50</li>
   </ul>
  </div>
  
</template>

<script>
export default {
  name: "detalibaseinfo",
  props: {
    goods: {
      type: Object,
      default() {
        {}
      },
    },
  },
};
</script>

<style>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #222;
}
.info-price {
  margin-top: 10px;
}
.info-price .n-price {
  font-size: 24px;
  color: #ea68a2;
}
.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-price .discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: #ea68a2;
  border-radius: 8px;
  margin-left: 5px;
  position: relative;
  top: -8px;
}
.info-other {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>