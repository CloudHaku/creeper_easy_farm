function 四個邊 (離中心: number, 高度: number, 方塊: string) {
    for (let index = 0; index <= 3; index++) {
        blocks.fill(
        blocks.blockByName(方塊),
        positions.add(
        起始點,
        pos(離中心 * xylist[index][0], 高度, 離中心 * xylist[index][1])
        ),
        positions.add(
        起始點,
        pos(離中心 * xylist[index + 1][0], 高度, 離中心 * xylist[index + 1][1])
        ),
        FillOperation.Replace
        )
    }
}
player.onChat("run", function () {
	
})
player.onChat("bu", function () {
    blocks.fill(
    STONE,
    positions.add(
    起始點,
    pos(1, 0, 1)
    ),
    positions.add(
    起始點,
    pos(-1, 20, -1)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    positions.add(
    起始點,
    pos(10, 20, 10)
    ),
    positions.add(
    起始點,
    pos(-10, 20, -10)
    ),
    FillOperation.Replace
    )
    四個邊(8, 21, blocks.nameOfBlock(PINK_CONCRETE))
    四個邊(9, 21, blocks.nameOfBlock(LIME_CONCRETE))
    四個邊(9, 22, blocks.nameOfBlock(GLASS))
    四個邊(8, 22, blocks.nameOfBlock(WATER))
    網狀(7, 23, blocks.nameOfBlock(POLISHED_DIORITE))
    blocks.fill(
    AIR,
    positions.add(
    起始點,
    pos(0, 0, 0)
    ),
    positions.add(
    起始點,
    pos(0, 20, 0)
    ),
    FillOperation.Replace
    )
})
function 網狀 (離中心: number, 高度: number, 方塊: string) {
    net = 離中心 * -1
    while (net <= 離中心) {
        blocks.fill(
        blocks.blockByName(方塊),
        positions.add(
        起始點,
        pos(net * 1, 高度, net * 1)
        ),
        positions.add(
        起始點,
        pos(net * 1, 高度, net * -1)
        ),
        FillOperation.Replace
        )
        blocks.fill(
        blocks.blockByName(方塊),
        positions.add(
        起始點,
        pos(net * 1, 高度, net * 1)
        ),
        positions.add(
        起始點,
        pos(net * -1, 高度, net * 1)
        ),
        FillOperation.Replace
        )
        net += 2
    }
    j = 離中心 * -1
    i = 離中心 * -1
    while (i <= 離中心) {
        while (j <= 離中心) {
            if (i % 2 == 0 && j % 2 == 0) {
                blocks.place(blocks.blockWithData(CHERRY_TRAPDOOR, 12), positions.add(
                起始點,
                pos(i, 高度, j)
                ))
            }
            j += 1
        }
        i += 1
    }
}
let i = 0
let j = 0
let net = 0
let xylist: number[][] = []
let 起始點: Position = null
起始點 = world(3, 4, -3)
xylist = [
[1, 1],
[1, -1],
[-1, -1],
[-1, 1],
[1, 1]
]
for (let index = 0; index <= 32; index++) {
    blocks.fill(
    AIR,
    positions.add(
    起始點,
    pos(64, index, 64)
    ),
    positions.add(
    起始點,
    pos(-64, index, -64)
    ),
    FillOperation.Replace
    )
}
