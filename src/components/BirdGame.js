import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native'
import Bird from './Bird/Bird'
import Obstacles from './Bird/Obstacles'

const BirdGame = () => {
    const screenWidth = Dimensions.get("screen").width
    const screenHeight = Dimensions.get("screen").height
    const birdLeft = screenWidth / 40;

    //hooks
    const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
    const [obstaclesLeft, setObstacleLeft] = useState(screenWidth)
    const [obstaclesLeftTwo, setObstacleLeftTwo] = useState(screenWidth + screenWidth / 2 + 100)
    const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0)
    const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0)
    //const [score, setScore] = useState(0)
    const obstacleWidth = 60;
    const obstacleHeight = 300;
    const gap = 250;
    const gravity = 3;
    let gameTimerId
    let obstaclesLeftTimerId
    let obstaclesLeftTimerIdTwo
    const [isGameOver, setIsGameOver] = useState(false)

    //start bird falling    
    useEffect(() => {
        if (birdBottom > 0) {
            gameTimerId = setInterval(() => {
                setBirdBottom(birdBottom => birdBottom - gravity)
            }, 30)
        }
        return () => {
            clearInterval(gameTimerId)
        }
    }, [birdBottom]);
    console.log(birdBottom)

    const jump = () => {
        if (!isGameOver && (birdBottom < screenHeight)) {
            setBirdBottom(birdBottom => birdBottom + 70)
            console.log('jumped')
        }
    }

    //start first obstacle
    useEffect(() => {
        if (obstaclesLeft > -190 - obstacleWidth) {
            obstaclesLeftTimerId = setInterval(() => {
                setObstacleLeft(obstaclesLeft => obstaclesLeft - 5)
            }, 30)
            return () => {
                clearInterval(obstaclesLeftTimerId)
            }
        } else {
            setObstacleLeft(screenWidth)
            setObstaclesNegHeight(- Math.random() * 100)
            //setScore(score = score + 1)
        }
    }, [obstaclesLeft])

    //start second obstacle
    useEffect(() => {
        if (obstaclesLeftTwo > -190 - obstacleWidth) {
            obstaclesLeftTimerIdTwo = setInterval(() => {
                setObstacleLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
            }, 30)
            return () => {
                clearInterval(obstaclesLeftTimerIdTwo)
            }
        } else {
            setObstacleLeftTwo(screenWidth)
            setObstaclesNegHeightTwo(- Math.random() * 100)
            //setScore(score = score + 1)
        }
    }, [obstaclesLeftTwo])

    //check for collisions
    useEffect(() => {
        if (
            ((birdBottom < (obstaclesNegHeight + obstacleHeight + 30) ||
                birdBottom > (obstaclesNegHeight + obstacleHeight + gap - 30)) &&
                (obstaclesLeft > screenWidth / 40 - 30 && obstaclesLeft < screenWidth / 40 + 30)
            )
            ||
            ((birdBottom < (obstaclesNegHeightTwo + obstacleHeight + 30) ||
                birdBottom > (obstaclesNegHeightTwo + obstacleHeight + gap - 30)) &&
                (obstaclesLeftTwo > screenWidth / 40 - 30 && obstaclesLeftTwo < screenWidth / 40 + 30)
            )
        ) {
            console.log('Game over')
            gameOver()
        }

    })

    const gameOver = () => {
        clearInterval(gameTimerId)
        clearInterval(obstaclesLeftTimerId)
        clearInterval(obstaclesLeftTimerIdTwo)
        setIsGameOver(true)
    }

    return (
        <TouchableWithoutFeedback onPress={jump}>
            <View style={styles.container}>
                {/*{isGameOver && <Text>{score}</Text>}*/}
                <Bird
                    birdBottom={birdBottom}
                    birdLeft={birdLeft}
                />
                <Obstacles
                    color={'green'}
                    obstacleHeight={obstacleHeight}
                    obstacleWidth={obstacleWidth}
                    obstacleLeft={obstaclesLeft}
                    randomBottom={obstaclesNegHeight}
                    gap={gap}
                />
                <Obstacles
                    color={'yellow'}
                    obstacleHeight={obstacleHeight}
                    obstacleWidth={obstacleWidth}
                    obstacleLeft={obstaclesLeftTwo}
                    randomBottom={obstaclesNegHeightTwo}
                    gap={gap}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default BirdGame;
