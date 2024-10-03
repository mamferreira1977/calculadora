new Vue({
    el: '#app',
    data: {
        num1: 0,
        num2: 0,
        operation: '',
        result: 0,
    },
    watch: {
        num1: 'calcular',
        num2: 'calcular',
        operation: 'calculadora'
    },
    methods: {
        calcular() {
            const n1 = parseFloat(this.num1);
            const n2 = parseFloat(this.num2);

            if (!isNaN(n1) && !isNaN(n2)) {
                switch (this.operation) {
                    case '+':
                        this.result = n1 + n2;
                        break;
                    case '-':
                        this.result = n1 - n2;
                        break;
                    case '*':
                        this.result = n1 * n2;
                        break;
                    case '/':
                        this.result = n2 !== 0 ? n1 / n2 : 'Erro: Divisão por zero';
                        break;
                    default:
                        this.result = 0;
                }
            } else {
                this.result = 0;
            }
        }
    }
});
