/*
 * GHCJS does not allow to export functions that return a value, so
 * this is a work-around-wrapper.
 */

function incredibleLogic(context, proof) {
    var tmp = {"context": context, "proof": proof};
    incredibleLogic_(tmp);
    return tmp.analysis;
}