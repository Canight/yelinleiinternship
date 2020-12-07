
// 实现一个网页版本无限加载列表，
// 支持自定义内容，
// 下拉加载更新，
// 加载数据要对外提供方法， 支持promise， 内部实现等待效果，


export default class {
    renderId
    config;
    loadCallback;
    data;
    constructor(renderId, config, loadCallback) {
        this.renderId = renderId;
        this.config = config;
        this.loadCallback = loadCallback;
        this.data = [{
            'test1d': "test1dtest1dtest1d",
            'test2d': "test1dtest1dtest1d",
            'test3d': "test1dtest1dtest1d",
        }, {
            'test1d': "test1dtest1dtest1d",
            'test2d': "test1dtest1dtest1d",
            'test3d': "test1dtest1dtest1d",
        }, {
            'test1d': "test1dtest1dtest1d",
            'test2d': "test1dtest1dtest1d",
            'test3d': "test1dtest1dtest1d",
        }, {
            'test1d': "test1dtest1dtest1d",
            'test2d': "test1dtest1dtest1d",
            'test3d': "test1dtest1dtest1d",
        }, {
            'test1d': "test1dtest1dtest1d",
            'test2d': "test1dtest1dtest1d",
            'test3d': "test1dtest1dtest1d",
        }, {
            'test1d': "test1dtest1dtest1d",
            'test2d': "test1dtest1dtest1d",
            'test3d': "test1dtest1dtest1d",
        },]
        this.create();
        // this.refresh(data);
    }

    create() {
        let renderEntity = document.getElementById(this.renderId);
        renderEntity.innerText = '测试';
        // 生成table
        let table = document.createElement('table');
        table.id = this.renderId + 't';
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
        let tbody = table.createTBody();
        tr = document.createElement("tr");
        for (let i = 0; i < cfg.length; i++) {
            let td = document.createElement("td");
            td.innerHTML = cfg[i].dataName;
            tr.appendChild(td);

        }
        tbody.appendChild(tr)

        renderEntity.appendChild(table);
    }
    refresh(data) {
        let cfg = this.config;
        let fragment = document.createDocumentFragment();
        console.log("cfg", cfg, "data", data);
        let tr, td;
        for (let i = 0; i < data.length; i++) {
            tr = document.createElement('tr');
            for (let j = 0; j < cfg.length; j++) {
                const content = data[i][cfg[j].dataName];
                td = document.createElement("td");
                td.innerHTML = content;
                tr.appendChild(td);
            }
            fragment.appendChild(tr);
        }

        let table = document.getElementById('mydiytablet');
        console.log("table", table);
        let tbody = table.tBodies[0];
        console.log("tbody", tbody);
        tbody.appendChild(fragment);
    }






}