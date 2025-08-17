import { create } from "zustand";

export const useAlertViewStore = create((set, get) => ({
    msgList: [],
    createMsgId: () => {
        return new Date().getTime()
    },
    showMsg: (Msg, type, timeout) => {
        let _msgId = get().createMsgId();
        type = type ?? "info";
        timeout = timeout ?? -1;
        let newMsg = {
            id: _msgId,
            alertMsg: Msg,
            alertType: type
        };
        let _msgList = get().msgList;
        _msgList.push(newMsg);
        set({ msgList: _msgList });
        if (timeout && timeout > 0) {
            setTimeout(() => {
                get().closeMsg(_msgId)
            }, (timeout * 1000));
        }
    },
    closeMsg: (id) => {
        let _msgList = get().msgList;
        _msgList = _msgList.filter(a => a.id !== id)
        set({ msgList: _msgList });
    }

}));