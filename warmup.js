"use strict";

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    // Ваше решение
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        throw new TypeError("В аргументы переданы не числа!");
    }
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    // Ваше решение
    if (!Number.isInteger(year)) {
        throw new TypeError("В качестве года передано не целое число!");
    }
    if (year < 0) {
        throw new RangeError("Год не может быть отрицательным числом!");
    }
    let century = Math.floor(year / 100) + 1;

    return century;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    // Ваше решение
    if (typeof hexColor === "string") {
        let numRegExp = /#[a-fA-F0-9]{6}/;
        if (numRegExp.test(hexColor) && hexColor.length === 7) {
            let colorRed = parseInt(hexColor.substr(1, 2), 16);
            let colorGreen = parseInt(hexColor.substr(3, 2), 16);
            let colorBlue = parseInt(hexColor.substr(5, 2), 16);

            return `(${colorRed}, ${colorGreen}, ${colorBlue})`;
        } else
            throw new RangeError("Incorrect input (color values out of range)");
    } else throw new TypeError("Incorrect input (not a string)");
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    // Ваше решение
    if (typeof n === "number") {
        if (Number.isInteger(n) && n > 0) {
            if (n === 0 || n === 1) {
                return n;
            }

            let x = 1,
                y = 1;
            let sum;

            for (let i = 1; i < n; i++) {
                sum = x + y;
                x = y;
                y = sum;
            }
            return sum;
        } else
            throw RangeError(
                "Incorrect input (not an integer positive number)"
            );
    } else throw new TypeError("Incorrect input (not a number)");
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    // Ваше решение
    if (!Array.isArray(matrix)) {
        throw new TypeError("Transfer not an 2D array");
    }

    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i])) {
            throw new TypeError("Transfer not an 2D array");
        }
    }

    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = [];
        for (let j = 0; j < matrix[i].length; j++) {
            row.push(matrix[j][i]);
        }
        newMatrix.push(row);
    }

    return newMatrix;
}

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
    // Ваше решение
    if (
        typeof n !== "number" ||
        typeof targetNs !== "number" ||
        !Number.isInteger(targetNs)
    ) {
        throw new TypeError("Incorrect input (not an integer number!)");
    }
    if (2 > targetNs || targetNs > 36) {
        throw new RangeError("radix argument must be between 2 and 36!");
    }
    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    // Ваше решение
    const template = /^8-800-\d{3}-\d{2}-\d{2}$/;
    if (typeof phoneNumber === "string") {
        return template.test(phoneNumber);
    }
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    // Ваше решение
    if (typeof text === "string") {
        let smile = text.match(/(\(-:)|(:-\))/g);
        let count = 0;
        if (smile) {
            count += smile.length;
        }
        return count;
    } else throw new TypeError("Incorrect input (not a string)");
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    // Ваше решение
    if (
        (field[0][0] === field[1][1] && field[0][0] === field[2][2]) ||
        (field[0][2] === field[1][1] && field[0][2] === field[2][0])
    ) {
        return field[1][1];
    }
    for (let i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][0] === field[i][2]) {
            return field[i][0];
        }
        if (field[0][i] === field[1][i] && field[0][i] === field[2][i]) {
            return field[0][i];
        }
    }
    return "draw";
}

module.exports = {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem,
};
