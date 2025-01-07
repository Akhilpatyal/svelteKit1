<h1>form</h1>

<form action="/login" method="POST">
   <input type="text" name="name" id="name" placeholder="Name">
   <input type="password" name="name" id="name" placeholder="Password">
   <button type="submit">Login</button>
</form>

<style>
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
    }
    form input{
        margin-bottom: 20px;
        width: 45vw;
        padding: 15px 10px;
        border: none;
        border-radius: 6px;
        outline: none;
        font-family: cursive;
        font-weight: 500;
        letter-spacing: 0.5px;
    }
    form input:hover{
        border: 2px solid rgb(37, 37, 146);
    }
    button{
        width: 48vw;
    }
</style>