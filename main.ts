function 限制高度 (離中心: number, 高度: number, 方塊: string) {
    net = 離中心 * -1
    while (net <= 離中心) {
        blocks.fill(
        blocks.blockWithData(blocks.blockByName(方塊), 4),
        positions.add(
        起始點,
        pos(離中心 * 1, 高度, net)
        ),
        positions.add(
        起始點,
        pos(離中心 * -1, 高度, net)
        ),
        FillOperation.Replace
        )
        blocks.fill(
        blocks.blockWithData(IRON_TRAPDOOR, 4),
        positions.add(
        起始點,
        pos(net, 高度, 離中心 * 1)
        ),
        positions.add(
        起始點,
        pos(net, 高度, 離中心 * -1)
        ),
        FillOperation.Replace
        )
        net += 2
    }
}
function 限制蜘蛛 (離中心: number, 高度: number, 方塊: string) {
    i = 離中心 * -1
    while (i <= 離中心) {
        if (i % 2 == 1) {
            j = 離中心 * -1
            while (j <= 離中心) {
                if (j % 2 == 0) {
                    blocks.place(blocks.blockByName(方塊), positions.add(
                    起始點,
                    pos(i, 高度, j)
                    ))
                    loops.pause(30)
                }
                j += 1
            }
        }
        i += 1
    }
    player.say("半磚完成")
}
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
player.onChat("bu", function () {
    起始點 = positions.add(
    起始點,
    pos(0, LVL, 0)
    )
    水漏斗(20)
    四個邊(9, 21, blocks.nameOfBlock(PINK_CONCRETE))
    四個邊(10, 21, blocks.nameOfBlock(LIME_CONCRETE))
    四個邊(10, 22, blocks.nameOfBlock(PURPUR_SLAB))
    四個邊(9, 22, blocks.nameOfBlock(WATER))
    LVL = 24
    起始點 = positions.add(
    起始點,
    pos(0, LVL, 0)
    )
    for (let index = 0; index < 4; index++) {
        網狀(7, 0 + LVL, blocks.nameOfBlock(PURPUR_BLOCK))
        限制蜘蛛(7, 1 + LVL, blocks.nameOfBlock(PURPUR_SLAB))
        限制高度(7, 2 + LVL, blocks.nameOfBlock(IRON_TRAPDOOR))
        LVL += 3
    }
    LVL += -3
    blocks.fill(
    BAMBOO_MOSAIC_SLAB,
    positions.add(
    起始點,
    pos(24, LVL, 24)
    ),
    positions.add(
    起始點,
    pos(-24, LVL, -24)
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
        pos(離中心 * 1, 高度, net)
        ),
        positions.add(
        起始點,
        pos(離中心 * -1, 高度, net)
        ),
        FillOperation.Replace
        )
        blocks.fill(
        blocks.blockByName(方塊),
        positions.add(
        起始點,
        pos(net, 高度, 離中心 * 1)
        ),
        positions.add(
        起始點,
        pos(net, 高度, 離中心 * -1)
        ),
        FillOperation.Replace
        )
        net += 2
    }
    player.say("地面完成")
}
function 水漏斗 (共幾層: number) {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    positions.add(
    起始點,
    pos(1, 0, 1)
    ),
    positions.add(
    起始點,
    pos(-1, 共幾層, -1)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    positions.add(
    起始點,
    pos(10, 共幾層, 10)
    ),
    positions.add(
    起始點,
    pos(-10, 共幾層, -10)
    ),
    FillOperation.Replace
    )
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
}
let j = 0
let i = 0
let net = 0
let xylist: number[][] = []
let 起始點: Position = null
let LVL = 0
LVL = 4
起始點 = world(3, 0, -3)
xylist = [
[1, 1],
[1, -1],
[-1, -1],
[-1, 1],
[1, 1]
]
for (let index = 0; index <= 48; index++) {
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
