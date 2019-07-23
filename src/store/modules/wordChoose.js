export default {
    state: {
        wordList: [
            {
                wordName: "clothes",
                chooseList: [
                    {
                        id: 1,
                        name: "帽子"
                    },
                    {
                        id: 2,
                        name: "连衣裙"
                    },
                    {
                        id: 3,
                        name: "短袜"
                    },
                    {
                        id: 4,
                        name: "衣服"
                    }
                ],
                rightItemId: 4
            },
            {
                wordName: "pants",
                chooseList: [
                    {
                        id: 1,
                        name: "裤子"
                    },
                    {
                        id: 2,
                        name: "帽子(常指带檐的)"
                    },
                    {
                        id: 3,
                        name: "女裙"
                    },
                    {
                        id: 4,
                        name: "连衣裙"
                    }
                ],
                rightItemId: 1
            },
            {
                wordName: "pants",
                chooseList: [
                    {
                        id: 1,
                        name: "裤子"
                    },
                    {
                        id: 2,
                        name: "帽子(常指带檐的)"
                    },
                    {
                        id: 3,
                        name: "女裙"
                    },
                    {
                        id: 4,
                        name: "连衣裙"
                    }
                ],
                rightItemId: 1
            },
        ]
    },
    mutations: {
        changeStar(state, index) {
            if (state.wordList[index].star < 5) {
                state.wordList[index].star = parseInt(state.wordList[index].star + 1)
            }
        },
        changeLearn(state, index) {
            state.wordList[index].isLearn = true
        }
    }
}