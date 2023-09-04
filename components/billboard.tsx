import { Billboard as BillboardType } from "@/types"
import Image from "next/image"


interface BillboardProps {
	data: BillboardType
}

export default function billboard({ data }: BillboardProps) {
	return (
		<div className="p-4 sm:p6 lg:p-8 rounded-xl overflow-hidden">
			<div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
				<Image
					fill
					alt="Image"
					src={data.imageUrl}
					className="object-cover object-center"
				/>
			</div>
		</div>
	)
}
