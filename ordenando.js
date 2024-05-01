

//==================================== FUNÇÃO SWAP =====================================================

    const swap = (lista) => [lista[0], lista[1]] = [lista[1], lista[0]];


//==================================== FUNÇÃO SHUFFLE ===================================================

    const shuffle = (lista) => {return lista.sort(() => Math.random() - 0.5)};


//==================================== FUNÇÃO BUBBLE-SORT ==============================================

    const bubble_sort = (x) => {
        let ordenado= false;
        while(!ordenado){
            ordenado=true;
            for(let i=1; i < x.length; i++)
                if(x[i-1]> x[i]) {
                    const res = x[i];
                    x[i] = x[i-1];
                    x[i-1] = res;
                    ordenado=false;
                }
        }
    }

//==================================== FUNÇÃO SELECT-SORT =============================================

    const select_sort = (x) => {
        let menor;
        for(let i=0; i < x.length - 1; i++) {
            menor=i;
            for(let j = i + 1; j < x.length; j++) {
                if(x[j] < x[menor]) {
                    menor = j;
                }
            }
            if(i != menor) {
                [x[i], x[menor]] = [x[menor], x[i]];
            }
        } 
    }

//=============================== FUNÇÃO QUICK-SORT E PARTICIONAR =====================================

    const quick_sort = (x, inicio = 0, fim = x.length - 1 ) => {
        if(inicio < fim) {
            let pivot = particionar(x, inicio, fim);
            quick_sort(x, inicio, pivot - 1);
            quick_sort(x, pivot + 1, fim);
        }
    }

    const particionar = (x, inicio, fim) => {
        let i = inicio - 1;
        for(let j = inicio; j < fim; j++) {
            if(x[j] <= x[fim]) {
                i = i + 1;
                [x[i], x[j]] = [x[j], x[i]];
            }
        }
        [x[i+1], x[fim]] = [x[fim], x[i+1]];
    }

//===================================================================================================

