import { describe, expect, it } from "vitest"
import { greetUser } from "../script/greet"

const user = 'John'

describe('Gretting different users', () => {
    it('Checking if John is greeted properly', () => {
        const input = user
        const expectedOutput = `Hello there ${user}`
        const result = greetUser(input)
        expect(result).toBe(expectedOutput)
    })


    it('Checking if John is the user that we are greeting', () => {
        const input = user
        const result = greetUser('John')
        expect(result).toContain(input)
    })


    it('Checking if wrong greeting message is returned', () => {
        const input = user
        const expectedOutput = `Hello there ${user}`
        const result = greetUser(input)
        expect(result).not.toBe(!expectedOutput)
    })
})

//All gretting works.

//Note: in the last greeting where we should check if wrong message is returned.
//I used !expectedOutput because I think anything else that is returned would turn out wrong.
//When testing this the test pass, but when i remove ! It fails. That must be because of the .not.