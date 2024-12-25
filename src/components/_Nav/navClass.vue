<template>
    <div class="barraTop">
        <nav>
            <a href="">Professores</a>
            <a href="">Alunos</a>
            <a href="">Sobre</a>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.barraTop{
    background-color: rgb(230,230, 230);
    width: 100%;
}
nav{
    padding: 20px 20px 20px 0;
    text-align: center;
}
nav a {
    padding: 10px;
    text-decoration: none;
    background-color: white;
    border-radius: 3px;
    color: rgb(0, 110, 255);
    font-weight: bold;
    margin-right: 15px;
}
</style>