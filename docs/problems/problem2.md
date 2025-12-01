# 问题 2: 三角函数恒等式证明

## 题目描述

证明以下三角函数恒等式：

$$
\sin^2\theta + \cos^2\theta = 1
$$

并推导出相关的三角恒等式。

## 解题思路

利用单位圆的定义和勾股定理来证明基本恒等式，然后通过代数变换推导其他恒等式。

## 解答过程

### 证明 $\sin^2\theta + \cos^2\theta = 1$

在单位圆中，任意角 $\theta$ 的终边与单位圆交于点 $P(\cos\theta, \sin\theta)$。

根据勾股定理，点 $P$ 到原点的距离为：

$$
\sqrt{(\cos\theta - 0)^2 + (\sin\theta - 0)^2} = \sqrt{\cos^2\theta + \sin^2\theta}
$$

由于在单位圆上，该距离等于 1：

$$
\sqrt{\cos^2\theta + \sin^2\theta} = 1
$$

两边平方得：

$$
\cos^2\theta + \sin^2\theta = 1
$$

### 推导其他恒等式

#### 1. $1 + \tan^2\theta = \sec^2\theta$

由 $\sin^2\theta + \cos^2\theta = 1$，两边除以 $\cos^2\theta$：

$$
\frac{\sin^2\theta}{\cos^2\theta} + \frac{\cos^2\theta}{\cos^2\theta} = \frac{1}{\cos^2\theta}
$$

即：

$$
\tan^2\theta + 1 = \sec^2\theta
$$

#### 2. $1 + \cot^2\theta = \csc^2\theta$

由 $\sin^2\theta + \cos^2\theta = 1$，两边除以 $\sin^2\theta$：

$$
\frac{\sin^2\theta}{\sin^2\theta} + \frac{\cos^2\theta}{\sin^2\theta} = \frac{1}{\sin^2\theta}
$$

即：

$$
1 + \cot^2\theta = \csc^2\theta
$$

## 应用示例

已知 $\sin\theta = \frac{3}{5}$，且 $\theta$ 在第二象限，求 $\cos\theta$ 和 $\tan\theta$。

解：

由 $\sin^2\theta + \cos^2\theta = 1$ 得：

$$
\left(\frac{3}{5}\right)^2 + \cos^2\theta = 1
$$

$$
\frac{9}{25} + \cos^2\theta = 1
$$

$$
\cos^2\theta = 1 - \frac{9}{25} = \frac{16}{25}
$$

由于 $\theta$ 在第二象限，$\cos\theta < 0$，所以：

$$
\cos\theta = -\frac{4}{5}
$$

$$
\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{3/5}{-4/5} = -\frac{3}{4}
$$

---

**难度**: ⭐ 基础  
**分类**: 三角函数  
**标签**: 恒等式, 单位圆, 证明

[返回试题清单](../README.md)