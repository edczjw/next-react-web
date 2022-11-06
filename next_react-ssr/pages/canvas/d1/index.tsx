import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import { bezier_2er, bezier_3er, rect } from './helper/d1'

const Home: NextPage = () => {
    let canvasRef = useRef(null) as any 
    let ctx = useRef(null) as any
    // // 记录输入第几个点位
    let pointst = useRef(0)
    let points = useRef([]) as any 
    // // 贝萨尔曲线数组
    let besiers = useRef([]) as any 
    let timer = useRef(0) as any 
    let rects = useRef([]) as any 


    useEffect(() => {
        console.log('变了么');
    }, [pointst]) 

    const setDraw = () => {
        const canvas = canvasRef.current as any
        // 画笔 
        let d = canvas.getContext('2d')
        ctx.current = d 
        d.clearRect(0, 0, 400, 400);
    }

    const draw = () => {
        let arr = []
        ctx.current.clearRect(0, 0, 400, 400); 
        // 生成方块
        for (let i = 0; i < besiers.current.length; i++) {
            let key = besiers.current[i].key
            let Rect = new rect(key, ctx.current)
            Rect.t = r()
            arr.push(Rect)
            rects.current = arr 
        }

        // 设置每个方块的动画延迟
        rects.current[0].t = -10
        // 开始动画
        let t = setInterval(() => {
            ctx.current.clearRect(0, 0, 400, 400)
            for (let i = 0; i < besiers.current.length; i++) {
                rects.current[i].move()
            }
        }, 16)
        timer.current = t
    }

    // 随机数
    const r = () => {
        return Math.floor(Math.random() * 10)
    }

    //   生成旋转方块
    const makeRect = (x: any, y: any) => { }

    // 画圆
    const drawCircle = (x: any, y: any, color: string, r: number) => {
        ctx.current.beginPath()
        ctx.current.fillStyle = color
        ctx.current.arc(x, y, r, 0, Math.PI * 2)
        ctx.current.fill()
        ctx.current.closePath()
        ctx.current = ctx.current
    }

    // 自定义贝塞尔曲线 二阶/三阶
    const addBezierLine = (e?: any) => {
        console.log(pointst); 
        e.stopPropagation()
        pointst.current++ 
        let p = { x: e.offsetX, y: e.offsetY }
        points.current.push(p) 
        drawCircle(p.x, p.y, '#b00', 3)
        if (pointst.current === 3) {
            let line = new bezier_2er(
                { x: points.current[0].x, y: points.current[0].y },
                { x: points.current[2].x, y: points.current[2].y },
                { x: points.current[1].x, y: points.current[1].y },
                ctx.current,
            )
            line.drawLine()
            //   等距点的距离和点的半径
            line.drawKeyPoint(2, 1)
            besiers.current.push(line) 
            pointst.current = 0
            points.current = []
        }
    }
    const addBezierLine_3 = (e?: any) => {
        e.stopPropagation()
        pointst.current ++ 
        let p = { x: e.offsetX, y: e.offsetY }
        points.current.push(p) 
        drawCircle(p.x, p.y, '#b00', 3)
        if (pointst.current === 4) {
            let line = new bezier_3er(
                { x: points.current[0].x, y: points.current[0].y },
                { x: points.current[2].x, y: points.current[2].y },
                { x: points.current[3].x, y: points.current[3].y },
                { x: points.current[1].x, y: points.current[1].y },
                ctx.current,
            )
            line.drawLine()
            //   等距点的距离和点的半径
            line.drawKeyPoint(2, 1)
            besiers.current.push(line) 
            pointst.current = 0
            points.current = [] 
        }
    }

    const d1 = (e: any) => {
        canvasRef.current.removeEventListener('click', addBezierLine_3)
        canvasRef.current.addEventListener('click', addBezierLine)
    }
    const d2 = (e: any) => {
        canvasRef.current.removeEventListener('click', addBezierLine)
        canvasRef.current.addEventListener('click', addBezierLine_3)
    }

    const d3 = () => {
        draw()
    }


    const d4 = () => {
        clearInterval(timer.current)
        ctx.current.clearRect(0, 0, 400, 400)
        points.current = []
        pointst.current = 0
    }


    useEffect(() => {
        setDraw()
    }, [])
    return (
        <div className={styles.canvas_d1}>
            <canvas ref={canvasRef} width={'400px'} height={'400px'} className={styles.canvas}>
                您的浏览器版本过低,不支持canvas,请升级浏览器或使用chrome浏览器
            </canvas>
            <div className={styles.btn_wrap}>
                <button className={styles.btn} onClick={d1}>二阶贝塞尔曲线描绘</button>
                <button className={styles.btn} onClick={d2}>三阶贝塞尔曲线描绘</button>
                <button className={styles.btn} onClick={d3}>开始动画</button>
                <button className={styles.btn} onClick={d4}>清屏</button></div>
        </div>
    )
}

export default Home
