export type XCoordinate = number
export type YCoordinate = number

export interface Position {
    x: XCoordinate
    y: YCoordinate
}

// Player types

export type PlayerId = string
export type PlayerPosition = Position
export type PlayerHealth = number
export type PlayerIsDead = boolean
export type PlayerSpeed = number
export type PlayerDamage = number
export type PlayerInvulnurable = boolean

export interface PlayerMovement {
    up: boolean
    down: boolean
    left: boolean
    right: boolean
}

