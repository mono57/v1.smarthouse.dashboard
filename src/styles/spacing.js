import { scaleSize, scaleFont } from './mixins';


// export const size18 = scaleSize(18);
// export const size16 = scaleSize(16);
// export const size14 = scaleSize(14);
// export const size12 = scaleSize(12);
// export const size8 = scaleSize(8);

// export function fontSize(size = 14) {
//     return {
//         fontSize: scaleFont(size)
//     }
// }

export const fontSize = size => {
    return { fontSize: scaleFont(size) }
}