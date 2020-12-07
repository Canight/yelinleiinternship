
// 实现一个网页版本无限加载列表，
// 支持自定义内容，
// 下拉加载更新，
// 加载数据要对外提供方法， 支持promise， 内部实现等待效果，
import axios from "axios"

export default class {
    renderId
    config;
    loadCallback;
    data;
    dataLoader;
    constructor(renderId, config, loadCallback) {
        this.renderId = renderId;
        this.config = config;
        this.loadCallback = loadCallback;
        this.data = [{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest2d",
            "testd": "test1dtest1dtest3d",
        }, {
            "test1d": "test1dtest1dtest4d",
            "test2d": "test1dtest1dtest5d",
            "testd": "test1dtest1dtest6d",
        }, {
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        }, {
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        }, {
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        }, {
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtest1dtest1d",
        },{
            "test1d": "test1dtest1dtest1d",
            "test2d": "test1dtest1dtest1d",
            "testd": "test1dtesffffffffff",
        },]
        // this.create();
        // this.refresh(this.data);
       
    }

    create() {
        let renderEntity = document.getElementById(this.renderId);
        // renderEntity.innerText = "测试";
        // 生成table
        let table = document.createElement("table");
        table.id = this.renderId + "t";
        //生成表头
        let cfg = this.config;
        let thead = table.createTHead();
        let tr = document.createElement("tr");
        for (let i = 0; i < cfg.length; i++) {
            let td = document.createElement("td");
            td.innerHTML = cfg[i].title;
            tr.appendChild(td);

        }
        thead.appendChild(tr);
        //生成tbody
        table.createTBody();
        // tr = document.createElement("tr");
        // for (let i = 0; i < cfg.length; i++) {
        //     let td = document.createElement("td");
        //     td.innerHTML = cfg[i].dataName;
        //     tr.appendChild(td);

        // }
        // tbody.appendChild(tr)

        renderEntity.appendChild(table);
        //为列表添加样式
        renderEntity.className = "mytb";
        //生成loader
        console.log("renderEntity.parentElement", renderEntity.parentElement);
        let loaderC = document.createElement("div");
        loaderC.id = "loader";
        
        let loaderAni = document.createElement("div");
        loaderC.style.visibility = "hidden";
        loaderC.appendChild(loaderAni);
        renderEntity.parentElement.appendChild(loaderC);
        loaderAni.className = "loader";
        loaderC.className = "loader-container";
        document.getElementsByTagName("style")[0].innerHTML += `
          .mytb{
            display: flex;
            justify-content: center;
            
          }
          .loader-container {
             
             /* margin:150px; */
             height: 50px;
             display: flex;
             justify-content: center;
          }
          .loader {
             font-size: 10px;
             width: 1em;
             height: 1em;
             border-radius: 50%;
             position: relative;
             /* text-indent: -9999em; */
             animation: load-effect 1.5s infinite linear;
          }
          @keyframes load-effect {
             0% {
                /*
          
                -3em:左移3em
          
                 2em:下移2em
          
                 0:模糊距离0，即纯色
          
                 .5em:外扩.5em
          
                 #000:白色
          
                */
                box-shadow: -3em 2em 0 .5em #000, 0 2em 0 0 #000, 3em 2em 0 -.5em #000;
             }
             25% {
                box-shadow: -3em 2em 0 0 #000, 0 2em 0 -.5em #000, 3em 2em 0 0 #000;
             }
             50% {
                box-shadow: -3em 2em 0 -0.5em #000, 0 2em 0 0 #000, 3em 2em 0 .5em #000;
             }
             75% {
                box-shadow: -3em 2em 0 0 #000, 0 2em 0 .5em #000, 3em 2em 0 0 #000;
             }
             100% {
                box-shadow: -3em 2em 0 .5em #000, 0 2em 0 0 #000, 3em 2em 0 -.5em #000;
             }
          }`;
        
        // loaderC.style = "background:#4ea980;height: 50px;display: flex;justify-content: center;";
        console.log(renderEntity.parentElement);

    }
    refresh(data) {
        let cfg = this.config;
        let fragment = document.createDocumentFragment();
        console.log("cfg", cfg, "data", data);
        let tr, td;
        for (let i = 0; i < data.length; i++) {
            tr = document.createElement("tr");
            for (let j = 0; j < cfg.length; j++) {
                const content = data[i][cfg[j].dataName];
                td = document.createElement("td");
                td.innerHTML = content;
                tr.appendChild(td);
            }
            fragment.appendChild(tr);
        }

        let table = document.getElementById("mydiytablet");
        console.log("table", table);
        let tbody = table.tBodies[0];
        console.log("tbody", tbody);
        tbody.appendChild(fragment);
    }

    createLoader(loadConfig,thenDo,errDo) {
        let that = this;
        let dataLoader=this.dataLoader = () => {
            return new Promise((resolve,reject) => {
            axios(loadConfig).then((res) => {
                that.refresh(res.data);
                resolve("success");
            }, (err) => {
                    reject(err); 
            })

        })
        } 
        //监听滚动事件

        // let dataLoader = this.dataLoader;
        window.addEventListener("scroll", (e) => {
            e;//防vue报错
          //调用calllback
          let docBody = document.documentElement;
            // console.log("docBody.scrollHeight:", docBody.scrollHeight);
            // console.log("docBody.scrollTop:", docBody.scrollTop);
            // console.log("docBody.clientHeight:", docBody.clientHeight);
            // console.log("docBody.scrollTop + docBody.clientHeight:", docBody.scrollTop + docBody.clientHeight);
            // console.log("judge",(docBody.scrollHeight - (docBody.scrollTop + docBody.clientHeight)));
            if ((docBody.scrollHeight - (docBody.scrollTop + docBody.clientHeight))<1) {//如果滑到底部
                //调用刷新callback
                console.log("到底");
                //显示加载动画
                document.getElementById("loader").style.visibility="visible"
                dataLoader().then((res) => {
                    console.log("cont", res);
                    thenDo(res);
                    document.getElementById("loader").style.visibility = "hidden";
                }, (err) => {
                    errDo(err);  
                });

            }
            
            
        })

        document.createElement("div").style.display="inline"
                dataLoader().then((res) => {
                    console.log("cont", res);
                    thenDo(res);
                    document.createElement("div").style.display = "none";
                }, (err) => {
                    errDo(err);  
                });
        
    }









}