
// 旋转的方块
class rect {
    w: number
    l: number
    deg: number
    deg_v: number
    key: any
    t: number
    ctx: any
    constructor(key: any, ctx: any) {
        this.w = 40
        this.l = 40

        this.deg = 0
        this.deg_v = 5
        // 路径点和当前所处的点的位置
        this.key = key
        this.t = 0
        this.ctx = ctx
    }
    // 旋转
    rotate(x: any, y: any) {
        this.ctx.save()
        this.ctx.fillStyle = '#ff0'
        this.ctx.strokeStyle = '#ff0'
        this.deg += this.deg_v
        this.ctx.translate(x, y)
        this.ctx.rotate((this.deg * Math.PI) / 180)
        this.ctx.strokeRect(-this.w / 2, -this.l / 2, this.w, this.l)
        this.ctx.restore()
    }

    // 移动
    move() {
        if (this.t >= 0) {
            this.rotate(this.key[this.t].px, this.key[this.t].py)
            if (this.t < this.key.length - 1) {
                this.w = this.l = 30 * (1 - (this.t + 1) / this.key.length)
                this.t++
            } else {
                this.w = this.l = 30
                this.t = 0
            }
        } else {
            this.t++
        }
    }
}

// 生成二阶贝塞尔，三阶贝赛尔曲线  参数：起点坐标|控制点1|控制点2|控制点3
class bezier_2er {
    start: any
    control_1: any
    control_2: any
    key!: { px: any; py: any }[]
    ctx: any
    constructor(start = {}, control_1 = {}, control_2 = {}, ctx: any) {
        // 读取实参作为属性（解构赋值）
        Object.assign(this, {
            start,
            control_1,
            control_2,
            key: [],
        });
        this.ctx = ctx
    }

    // 绘制贝塞尔曲线
    drawLine() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#ff0";
        this.ctx.moveTo(this.start.x, this.start.y);
        this.ctx.quadraticCurveTo(
            this.control_1.x,
            this.control_1.y,
            this.control_2.x,
            this.control_2.y
        );
        this.ctx.stroke();
        this.ctx.closePath();
    }
    // 生成贝塞尔曲线等距点位数组  参数：曲线|步长
    pointOfBezier(length: number) {
        let t = 0;
        //   检测起点
        let testX = this.start.x,
            testY = this.start.y;
        // 等距点数组，默认把起点丢进去
        const key = [{ px: testX, py: testY }];

        //   进行检测等距点检测
        for (t = 0; t < 1; t += 0.001) {
            const { px, py } = this.computedPosition(t);
            this.ctx.beginPath();
            // this.ctx.arc(testX, testY, length, 0, Math.PI * 2);
            // 当检测到曲线上的点在以监测点为圆心的length半径长度时，记录改点坐标，并将该点设为新的监测点
            if (
                Math.sqrt(Math.pow(px - testX, 2) + Math.pow(py - testY, 2)) >=
                length
            ) {
                testX = px;
                testY = py;
                const a = {
                    px,
                    py,
                };
                key.push(a);
            }
            this.ctx.closePath();
            t += 0.001;
        }

        //   将终点放入数组
        key.push({ px: this.control_2.x, py: this.control_2.y });
        this.key = key;
    }

    // 获取二阶贝塞尔曲线上的点  参数：比例
    computedPosition(t: number) {
        const x =
            Math.pow(1 - t, 2) * this.start.x +
            2 * t * (1 - t) * this.control_1.x +
            Math.pow(t, 2) * this.control_2.x;
        const y =
            Math.pow(1 - t, 2) * this.start.y +
            2 * t * (1 - t) * this.control_1.y +
            Math.pow(t, 2) * this.control_2.y;
        return {
            px: x,
            py: y,
        };
    }

    // 绘制等距点
    drawKeyPoint(length: any, r: any) {
        this.pointOfBezier(length);
        const key = this.key;
        for (let i = 0; i < key.length; i++) {
            this.ctx.beginPath();
            this.ctx.fillStyle = "#b44";
            this.ctx.arc(key[i].px, key[i].py, r, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.closePath();
        }
    }
}

class bezier_3er {
    start: any
    control_1: any
    control_2: any
    control_3: any
    key!: { px: any; py: any }[]
    ctx: any
    constructor(
        start = {},
        control_1 = {},
        control_2 = {},
        control_3 = {},
        ctx: any
    ) {
        // 读取实参作为属性（解构赋值）
        Object.assign(this, {
            start,
            control_1,
            control_2,
            control_3,
            key: [],
        });
        this.ctx = ctx
    }
    // 绘制贝塞尔曲线
    drawLine() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#ff0";
        this.ctx.moveTo(this.start.x, this.start.y);
        this.ctx.bezierCurveTo(
            this.control_1.x,
            this.control_1.y,
            this.control_2.x,
            this.control_2.y,
            this.control_3.x,
            this.control_3.y
        );
        this.ctx.stroke();
        this.ctx.closePath();
    }

    // 生成贝塞尔曲线等距点位数组  参数：曲线|步长
    pointOfBezier(length: number) {
        let t = 0;
        //   检测起点
        let testX = this.start.x,
            testY = this.start.y;
        // 等距点数组，默认把起点丢进去
        const key = [{ px: testX, py: testY }];

        //   进行检测等距点检测
        for (t = 0; t < 1; t += 0.001) {
            const { px, py } = this.computedPosition(t);
            this.ctx.beginPath();
            // this.ctx.arc(testX, testY, length, 0, Math.PI * 2);
            // 当检测到曲线上的点在以监测点为圆心的length半径长度时，记录改点坐标，并将该点设为新的监测点
            if (
                Math.sqrt(Math.pow(px - testX, 2) + Math.pow(py - testY, 2)) >=
                length
            ) {
                testX = px;
                testY = py;
                const a = {
                    px,
                    py,
                };
                key.push(a);
            }
            this.ctx.closePath();
            t += 0.001;
        }//   将终点放入数组
        key.push({ px: this.control_3.x, py: this.control_3.y });
        this.key = key;
    }

    // 获取贝塞尔曲线上的点  参数：比例
    computedPosition(t: number) {
        const x =
            this.start.x * Math.pow(1 - t, 3) +
            3 * t * this.control_1.x * Math.pow(1 - t, 2) +
            3 * this.control_2.x * Math.pow(t, 2) * (1 - t) +
            this.control_3.x * Math.pow(t, 3);
        const y =
            this.start.y * Math.pow(1 - t, 3) +
            3 * t * this.control_1.y * Math.pow(1 - t, 2) +
            3 * this.control_2.y * Math.pow(t, 2) * (1 - t) +
            this.control_3.y * Math.pow(t, 3);

        return {
            px: x,
            py: y,
        };
    }

    // 绘制等距点
    drawKeyPoint(length: any, r: any) {
        this.pointOfBezier(length); const key = this.key;
        for (let i = 0; i < key.length; i++) {
            this.ctx.beginPath();
            this.ctx.fillStyle = "#b44";
            this.ctx.arc(key[i].px, key[i].py, r, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.closePath();
        }
    }
}

export {
    rect,
    bezier_2er,
    bezier_3er
}