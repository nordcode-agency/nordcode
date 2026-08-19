// insertBeforeIdx refers to a position in the passed order, before removing the moved question
export const reorderQuestions = (
    order: string[],
    questionId: string,
    insertBeforeIdx: number,
): string[] => {
    const fromIdx = order.indexOf(questionId);

    if (fromIdx === -1) {
        return order;
    }

    const updatedOrder = [...order];
    updatedOrder.splice(fromIdx, 1);

    const targetIdx = fromIdx < insertBeforeIdx ? insertBeforeIdx - 1 : insertBeforeIdx;
    updatedOrder.splice(targetIdx, 0, questionId);

    return updatedOrder;
};
