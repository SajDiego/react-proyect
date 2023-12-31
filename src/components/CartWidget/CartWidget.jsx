import React from "react";
import { useState, useEffect } from "react";

function CartWidget() {
    return(
        <>
        <div className="cart">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtUlEQVR4nO2ZX0ibVxiHD7sQul7uejeL2pjUzGgnatJoZk21ybqMzpVOm6pzabO5C7uJri1k2M6kWhwdUtrBUIedhQodZsQyrSZe7Lr1Rga7Tad325oJXsxnnExGWlDzp0m/5fseeODjnDe/94WcwCGfEBoaGhoaGhoaGhpPYWilSHeOqzofj3U+2M3XzhHT+QjKz4hC4cBZggfOQpoGRKFg9BIzesH4IXV71Rq8WBO1XmKiUCjvJmbqBpMXayr1idpuEIWCuYtA5QeQrqJQMLRSVN1B4I0OYtWdkKpCrdSeAalQK4c9IBVqxd4OSrOhnZi9jWBrPu4nTW2gWN/Pw/2k+RRIhYJoPoV1e67c309cJ0EqFEbe5nK/B/kyk7lErjnxLuTLTOYSauXkCZAKNXLazStt70Cbm99z3szjhlyYzUyn3ZzfzpkXuabrOOTCTOfpPE5n11tsyoyOtzkm1EJ7E/u9Lia8Lkjo5IpQCz0u9D4nKx85wXeMDZ8Tb96af9IC2Zht/54WPD0txLfzVj9uoVzkk95myMaM+7ayr/cot5Kyvvu0if1CDZx3oP/MwUqfA/ocbPQ58njkXzT9jXgGGokPHIH+Rlb7j+T5yD/LpUZIRZElvTXsu/gmt5IylXHkv7BDKmbTw1+P3m9nReb47Wz47So68oN2PIP1xC83wGADq4O2F3zk84Ff8NKXVgxDNqYDNpAO2Rj3V/GyUBp+A0UjFq4OW3g8YoXn7bCF+IiFM0KpjNYR/MoCz9m/Ry38OlrHzWuHeVUomes1xL6uheu1e79LLEhu1IBUqJVvqkEq1Mq3h0Aq1MZkJa7JSpYmqyBhJeFxM83p5oxX0bCd89dEFfHJKhZltlAyU2YuTZnZum2GZOXaVAX+VHNum7n4bMZ/WRUK/UNj+nUa7lTA94fYHLpJ5PMo6xeWWZPPcm26gq07Jo7umWPCJWt3ypE9ZI1QGjPlLM2YYGyMyLUIJHtjjIjcmzER3jPH9G/tbjl3y3kglMY9I/EfDsL4fdYn5uEp77Mu99Jxt5x7B/lTKI2QkSchI4R+ZC00B8nOhvktsZeOu+TMGvlDKI1wGYtzZRAdJvLzLCQbDRKRe+EyQinkLO2VM6dX4E9gXo9rXg8LRjYfBoj8cpc16aMAEbn2k56tBT1NKeQ4E7U75MgeskYokaVSriyVwg4OpJqzWMKFnXIWS7kslMxyMa7lYh4s63gijRazEC3BlkFOfXKOfI6WKPSb19DQ0NDQ0NDQEP9//gHAG5VlZt1oLAAAAABJRU5ErkJggg=="></img>
        <p>0</p>
        </div>
        </>
    )
} 
export default CartWidget;