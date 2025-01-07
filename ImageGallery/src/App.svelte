<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  let term: "";
  $: count = 1;
  let photos: {
    id: string;
    alt_description: string;
    urls: {
      regular: string;
    };
  }[] = [];
  const fetch = async () => {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=${count}&query=${term || "office"}&client_id=feJFgpL7j69NNdN1nt2X4FWZf6ay1Qo3ssZ3YgYBUjc`,
    );
    photos = response.data.results;
  };
  onMount(() => {
    // fetch data
    fetch();
  });
  // onDestroy(()=>{

  // })
  // afterUpdate(()=>{

  // })
  // beforeUpdate(()=>{

  // })
  const handleSearch = async () => {
    if (!term) return;
    await fetch();
    // term = "";
  };
  const More = async () => {
    count++;
   
    // fetch data
    fetch();
  
    // Append new images to the existing array
  };

  // Fetch initial set of images on component mount

</script>

<main>
  <div class="header">
    <h1>Image Library</h1>
    <!-- client server model -->
    <div class="inputcontainer">
      <input bind:value={term} type="text" />
      <button class="btn" onclick={handleSearch}>Search</button>
    </div>
  </div>
  <div class="photos">
    {#each photos as photo, i (photo.id)}
      <div class="photo">
        <img
          src={photo.urls.regular}
          alt={photo.alt_description}
          in:fly={{ y: 200, duration: 2000, delay: i * 200 }}
          out:fade
        />
      </div>
    {/each}
  </div>
  <button class="btn" onclick={More}>More</button>

  <!-- animation -->
  <div class="animation-area">
    <ul class="box-area">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</main>

<!-- installing axios -->
<!-- use onMOUNT to call the data -->
<!-- adding animation -->

<style>
  main{
    position: relative;
    z-index:1;
  }
  .header{
    padding-bottom: 20px;
  }
  .photos {

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  .photos img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin: 10px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  input {
    padding: 6px;
    font-family: "Times New Roman", Times, serif;
    margin: 20px 10px;
    font-size: medium;
  }
  .photos img:hover {
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
  h1 {
  font-size: 3rem; /* Adjust as needed */
 
  text-transform: uppercase;
  color: transparent; /* Base color invisible */
  background: linear-gradient(90deg, #00ffff, #1e90ff, #00bfff, #4b0082);
 
  -webkit-background-clip: text;
  background-clip: text;
  animation: waterEffect 6s ease infinite, textColor 10s infinite;
}

@keyframes waterEffect {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 50% 50%;
  }
}

@keyframes textColor {
  0% {
    color: white;
  }
  25% {
    color: #00ffff;
  }
  50% {
    color: #1e90ff;
  }
  100% {
    color: #7a06cc;
  }
}

.animation-area{
  position: absolute;
  background: linear-gradient(to let, #00ffff, #1e90ff, #00bfff, #4b0082);
  width: 100%;
  height: 100%;
  z-index: -1;
  /* top: 0; */
  bottom: 0;
}
.box-area{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.box-area li{
  position: absolute;
  display: block;
  list-style: none;

  background: rgba(255, 255, 255, 0.2);
  animation: animate 30s linear infinite;
  bottom: -150px;
}
.box-area li:nth-child(1){
  left: 0%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}
.box-area li:nth-child(2){
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 1.5s;
  animation-duration: 10s;
}
.box-area li:nth-child(3){
  left: 50%;
  width: 80px;
  height: 80px;
  animation-delay: 5.5s;
}
.box-area li:nth-child(4){
  left: 75%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
  animation-duration: 12s;
}
.box-area li:nth-child(5){
  left: 78%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}
.box-area li:nth-child(6){
  left: 40%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
  animation-duration: 8s;
}
.box-area li:nth-child(6){
  left: 35%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}
@keyframes animate{
  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100%{
    transform: translateY(-2800px) rotate(360deg);
    opacity: 0;
  }
}
</style>
