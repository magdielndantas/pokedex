import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --bg-primary: #FAFBFD;
        --bg-secondary: #ffffff;
        --grass: #9bcc50;
        --fire: #ff9441;
        --water: #4592c4;
        --bug: #729f3f;
        --rock: #a38c21;
        --normal: #a4acaf;
        --poison: #b97fc9;
        --ghost: #7b62a3;
        --dark: #707070;
        --electric: #eed535;
        --ground: #f7de3f;
        --fairy: #fdb9e9;
        --psychic: #f366b9;
        --fighting: #d56723;

        --light-blue: #F3F8FE;
        --dark-blue: #24416A;
        --gray: #B3BCCA;

        --very-low-stat: #f44336;
        --low-stat1: #ff5722;
        --low-stat2: #ff9800;
        --low-stat3: #ffc107;
        --medium-stat1:#ffeb3b;
        --medium-stat2: #cddc39;
        --medium-stat3: #8bc34a;
        --good-stat: #77ad38;
        --max-stat: #4caf50;
    }

    .grass{color: var(--grass) !important;}
    .fire{color: var(--fire) !important;}
    .water{color: var(--water) !important;}
    .bug{color: var(--bug) !important;}
    .rock{color: var(--rock) !important;}
    .normal{color: var(--normal) !important;}
    .poison{color: var(--poison) !important;}
    .ghost{color: var(--ghost) !important;}
    .dark{color: var(--dark) !important;}
    .electric{color: var(--electric) !important;}
    .ground{color: var(--ground) !important;}
    .fairy{color: var(--fairy) !important;}
    .psychic{color: var(--psychic) !important;}
    .fighting{color: var(--fighting) !important;}


    .stat{
        display: flex;
        align-items: center;
        position: relative;
        height: 15px;
        border-radius: 15px;
        width: 100%; 
    }

    .bar{
        position: absolute;
        left: 0;
        height: 15px;

        width: 100%;
        background: rgba(0,0,0, 0.1);
        border-radius: 15px;
    }

    .s{
        position: absolute;
        left:0;
        height: 15px;
        border-radius: 15px;
    }
    /*0%*/
    .s0{width:0%; background: var(--very-low-stat)}
    .s1{width:1%; background: var(--very-low-stat)}
    .s2{width:2%; background: var(--very-low-stat)}
    .s3{width:3%; background: var(--very-low-stat)}
    .s4{width:4%; background: var(--very-low-stat)}
    .s5{width:5%; background: var(--very-low-stat)}
    .s6{width:6%; background: var(--very-low-stat)}
    .s7{width:7%; background: var(--very-low-stat)}
    .s8{width:8%; background: var(--very-low-stat)}
    .s9{width:9%; background: var(--very-low-stat)}
    /*10%*/
    .s10{width:10%; background: var(--low-stat1)}
    .s11{width:11%; background: var(--low-stat1)}
    .s12{width:12%; background: var(--low-stat1)}
    .s13{width:13%; background: var(--low-stat1)}
    .s14{width:14%; background: var(--low-stat1)}
    .s15{width:15%; background: var(--low-stat1)}
    .s16{width:16%; background: var(--low-stat1)}
    .s17{width:17%; background: var(--low-stat1)}
    .s18{width:18%; background: var(--low-stat1)}
    .s19{width:19%; background: var(--low-stat1)}
    /*20%*/
    .s20{width:20%; background: var(--low-stat2)}
    .s21{width:21%; background: var(--low-stat2)}
    .s22{width:22%; background: var(--low-stat2)}
    .s23{width:23%; background: var(--low-stat2)}
    .s24{width:24%; background: var(--low-stat2)}
    .s25{width:25%; background: var(--low-stat2)}
    .s26{width:26%; background: var(--low-stat2)}
    .s27{width:27%; background: var(--low-stat2)}
    .s28{width:28%; background: var(--low-stat2)}
    .s29{width:29%; background: var(--low-stat2)}
    /*30%*/
    .s30{width:30%; background: var(--low-stat3)}
    .s31{width:31%; background: var(--low-stat3)}
    .s32{width:32%; background: var(--low-stat3)}
    .s33{width:33%; background: var(--low-stat3)}
    .s34{width:34%; background: var(--low-stat3)}
    .s35{width:35%; background: var(--low-stat3)}
    .s36{width:36%; background: var(--low-stat3)}
    .s37{width:37%; background: var(--low-stat3)}
    .s38{width:38%; background: var(--low-stat3)}
    .s39{width:39%; background: var(--low-stat3)}
    /*40%*/
    .s40{width:40%; background: var(--medium-stat1)}
    .s41{width:41%; background: var(--medium-stat1)}
    .s42{width:42%; background: var(--medium-stat1)}
    .s43{width:43%; background: var(--medium-stat1)}
    .s44{width:44%; background: var(--medium-stat1)}
    .s45{width:45%; background: var(--medium-stat1)}
    .s46{width:46%; background: var(--medium-stat1)}
    .s47{width:47%; background: var(--medium-stat1)}
    .s48{width:48%; background: var(--medium-stat1)}
    .s49{width:49%; background: var(--medium-stat1)}
    /*50%*/
    .s50{width:50%; background: var(--medium-stat2)}
    .s51{width:51%; background: var(--medium-stat2)}
    .s52{width:52%; background: var(--medium-stat2)}
    .s53{width:53%; background: var(--medium-stat2)}
    .s54{width:54%; background: var(--medium-stat2)}
    .s55{width:55%; background: var(--medium-stat2)}
    .s56{width:56%; background: var(--medium-stat2)}
    .s57{width:57%; background: var(--medium-stat2)}
    .s58{width:58%; background: var(--medium-stat2)}
    .s59{width:59%; background: var(--medium-stat2)}
    /*60%*/
    .s60{width:60%;  background: var(--medium-stat3)}
    .s61{width:61%;  background: var(--medium-stat3)}
    .s62{width:62%;  background: var(--medium-stat3)}
    .s63{width:63%;  background: var(--medium-stat3)}
    .s64{width:64%;  background: var(--medium-stat3)}
    .s65{width:65%;  background: var(--medium-stat3)}
    .s66{width:66%;  background: var(--medium-stat3)}
    .s67{width:67%;  background: var(--medium-stat3)}
    .s68{width:68%;  background: var(--medium-stat3)}
    .s69{width:69%;  background: var(--medium-stat3)}
    /*70%*/
    .s70{width:70%; background: var(--good-stat)}
    .s71{width:71%; background: var(--good-stat)}
    .s72{width:72%; background: var(--good-stat)}
    .s73{width:73%; background: var(--good-stat)}
    .s74{width:74%; background: var(--good-stat)}
    .s75{width:75%; background: var(--good-stat)}
    .s76{width:76%; background: var(--good-stat)}
    .s77{width:77%; background: var(--good-stat)}
    .s78{width:78%; background: var(--good-stat)}
    .s79{width:79%; background: var(--good-stat)}
    /*80%*/
    .s80{width:80%; background: var(--good-stat)}
    .s81{width:81%; background: var(--good-stat)}
    .s82{width:82%; background: var(--good-stat)}
    .s83{width:83%; background: var(--good-stat)}
    .s84{width:84%; background: var(--good-stat)}
    .s85{width:85%; background: var(--good-stat)}
    .s86{width:86%; background: var(--good-stat)}
    .s87{width:87%; background: var(--good-stat)}
    .s88{width:88%; background: var(--good-stat)}
    .s89{width:89%; background: var(--good-stat)}
    /*90%*/
    .s90{width:90%; background: var(--good-stat)}
    .s91{width:91%; background: var(--good-stat)}
    .s92{width:92%; background: var(--good-stat)}
    .s93{width:93%; background: var(--good-stat)}
    .s94{width:94%; background: var(--good-stat)}
    .s95{width:95%; background: var(--good-stat)}
    .s96{width:96%; background: var(--good-stat)}
    .s97{width:97%; background: var(--good-stat)}
    .s98{width:98%; background: var(--good-stat)}
    .s99{width:99%; background: var(--good-stat)}

    .s100{width:100%; background: var(--max-stat)}

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    *, button, input{
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif
    }

    a{
        text-decoration: none;
    }
`;