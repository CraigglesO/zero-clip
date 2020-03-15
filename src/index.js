// @flow
function zeroClip (polygon, offset = 0) {
  const vertices = []
  const indices = []

  // prep & store the anchor
  let indexPos = 1
  let i, rl

  // run through every point and create a triangle from the anchor
  for (const ring of polygon) {
    rl = ring.length - 1
    for (i = 0; i < rl; i++) {
      // store next vertex and set
      vertices.push(...ring[i])
      indices.push(offset, indexPos + offset, indexPos + offset + 1) // first position is the anchor
      indexPos++
    }
    // store the last point
    vertices.push(...ring[rl])
    indexPos++
  }

  return { vertices, indices }
}

function zeroClipDiv (polygon, modulo = 0, offset = 0) {

}

exports.zeroClip = zeroClip
exports.zeroClipDiv = zeroClipDiv
