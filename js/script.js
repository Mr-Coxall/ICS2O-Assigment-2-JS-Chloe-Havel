// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function displays "Hello, World!".
 * @constructor
 */
'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const height = parseInt(document.getElementById('height-of-triangle').value)
  const base = parseInt(document.getElementById('base-of-triangle').value)

  // process
  const area = (1/2) * base * height 

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}