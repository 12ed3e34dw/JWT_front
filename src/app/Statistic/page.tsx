'use client';
import "@/Styles/Statistic_user_styles/Statistic_styles.css";
import Menu_Contacts from "@/navigate/Menu_Contacts";
import Menu from "@/navigate/Menu";
import {useTranslation} from "react-i18next";

export default function Page() {
    const { t } = useTranslation();
    return (
        <>
            <Menu/>
            <div className="container_Main">

                <div className="block_1_Statistic">
                    <div className="">DO YOU LIKE</div>
                    <div className="">COUNTING?</div>
                    <div className="">Set a goal and track your progress!</div>
                </div>


                <div className="Main_block_Statistic">
                    <div className="buttonStatistic_1">
                        <div className="txt_button_Today">
                            Today
                        </div>
                    </div>
                    <div className="buttonStatistic_2">
                        <div className="txt_7_days">
                            7 days
                        </div>
                    </div>
                    <div className="buttonStatistic_3">
                        <div className="txt_30_days">
                            30 days
                        </div>
                    </div>
                    <div className="buttonStatistic_4">
                        <div className="txt_All_time">
                            All time
                        </div>
                    </div>
                </div>

<div className="container_statistic_level">

    <div className="">My level</div>

    <div className="">lvl 1</div>

    <div className="">75xp/150xp</div>
</div>

                <div className="">All time</div>

                <div className="">

                    <div className="">
                       5
                    </div>

                    <div className="">
                    testes passed
                    </div>

                </div>
                <div className="">
                    <div className="">
                      1
                    </div>
                    <div className="">
                     phrases passed
                    </div>
                </div>
                <div className="">

                    <div className="">
                     11
                    </div>

                    <div className="">
                    achievements recieved
                    </div>
                </div>
                <div className="">

                    <div className="">
                       75
                    </div>

                    <div className="">
                     xp
                    </div>
                </div>


                <div className="">
                    <div className="">Recent activity</div>

                </div>


                <div className="">
                    <div className="">Tests studied</div>

                    <div className=""></div>

                    <div className=""></div>

                    <div className=""></div>

                    <div className=""></div>

                    <div className=""></div>

                    <div className=""></div>


                    <div className=""></div>

                    <div className=""></div>

                    <div className=""></div>

                    <div className=""></div>

                    <div className=""></div>

                    <div className=""></div>


                    <div className="">View fewer</div>
                </div>



                <div className="">
                    <div className=""></div>

                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>

                <div className="">

                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>

                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>

                    <div className="">View fewer</div>
                </div>

            </div>
            <Menu_Contacts/>
        </>
    )
}
