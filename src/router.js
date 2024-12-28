import Vue from 'vue';
import Router from 'vue-router';
import Alunos from './components/Aluno/AlunosClass.vue'
import Professor from './components/Professor/ProfessorClass.vue'
import Sobre from './components/Sobre/SobreClass.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            nome: 'Professores',
            component: Professor
        },
        {
            path: '/professores',
            nome: 'Professores',
            component: Professor
        },
        {
            path: '/alunos/:prof_id',
            nome: 'Alunos',
            component: Alunos
        },
        {
            path: '/todosAlunos',
            nome: 'Alunos',
            component: Alunos
        },
        {
            path: '/sobre',
            nome: 'Sobre',
            component: Sobre
        }
    ]
})