export default {
    state: {
        wordList: [
            {
                name: "apple",
                star: 0,
                id: 0,
                detail: 'n. 苹果;n. 苹果树',
                enText: 'I like this apple because it is sweet.',
                cnText: '我喜欢这个苹果因为它很甜。',
                isLearn: true
            },
            {
                name: "banana",
                star: 0,
                id: 1,
                detail: 'n. 香蕉',
                enText: 'Monkey likes eating banana.',
                cnText: '猴子喜欢吃香蕉',
                isLearn: true
            },
            {
                name: "cake",
                star: 0,
                id: 2,
                detail: 'n. 蛋糕,糕点;n. 饼',
                enText: 'I like eating this birthday cake.',
                cnText: '我喜欢吃这个生日蛋糕。',
                isLearn: false
            },
            {
                name: "cat",
                star: 0,
                id: 3,
                detail: 'n. 猫',
                enText: 'The cat is very cute.',
                cnText: '这只猫很可爱。',
                isLearn: false
            },
            {
                name: "panda",
                star: 0,
                id: 4,
                detail: 'n. 熊猫',
                enText: 'A panda likes eating bamboo only.',
                cnText: '熊猫只喜欢吃竹子。',
                isLearn: false
            },
            {
                name: "candy",
                star: 0,
                id: 5,
                detail: 'n. 糖果;n. 冰糖',
                enText: 'She eats too much candy.',
                cnText: '她吃的糖果太多了。',
                isLearn: false
            },
            {
                name: "monkey",
                star: 0,
                id: 6,
                detail: 'n. 猴子;n. 淘气鬼',
                enText: 'A monkey likes eating bananas.',
                cnText: '猴子喜欢吃香蕉。',
                isLearn: false
            },
            {
                name: "hello",
                star: 0,
                id: 7,
                detail: 'int. 喂;int. 你好',
                enText: 'Hello John,how are you?',
                cnText: '你好,约翰,你好吗?',
                isLearn: false
            },
            {
                name: "morning",
                star: 0,
                id: 8,
                detail: 'n. 早晨,上午',
                enText: 'Good morning! Its time for breakfast.',
                cnText: '早上好!该吃早饭了。',
                isLearn: false
            },
            {
                name: "bamboo",
                star: 0,
                id: 9,
                detail: 'n. 竹,竹子',
                enText: 'Pandas like eating bamboo.',
                cnText: '大熊猫喜欢吃竹子。',
                isLearn: false
            }
        ]
    },
    mutations: {
        changeStar(state, index) {
            if (state.wordList[index].star < 5) {
                state.wordList[index].star = parseInt(state.wordList[index].star + 1)
            }
        },
        changeLearn(state,index){
            state.wordList[index].isLearn = true
        }
    }
}