require_relative '../config/environment'

# thor = Hero.new([ 
#     {
#         name: 'Super Strength',
#         coolness: 3
#     },
#     {
#         name:'Flight',
#         coolness: 5
#     },
#     {
#         name: 'Lighting Blast',
#         coolness: 10
#     }
#     ])


describe "Hero Class" do

    let(:thor) do
        Hero.new([ 
            {
                name: 'Super Strength',
                coolness: 3
            },
            {
                name:'Flight',
                coolness: 5
            },
            {
                name: 'Lighting Blast',
                coolness: 10
            }
            ]) 
    end
        
        it 'should return the hero\'s coolest ability' do
            expect(thor.coolest_ability).to (eq({
                name: 'Lighting Blast',
                coolness: 10
            }))
        end
        # test = expect(thor.coolest_ability)
        # hypothesis = eq({
        #     name: 'Lighting Blast',
        #     coolness: 10
        # })
        # test.to(hypothesis)

        # Happy path input
        it 'should be able to add_ability to @abilities' do
            thor.add_ability({
                name: 'Laser Eyes',
                coolness: 1
            })
            expect(thor.abilities).to (include({
                name: 'Laser Eyes',
                coolness: 1
            }))
        end

        # Sad path test
        it 'should not be malformed input' do
            thor.add_ability(9)
            # binding.pry
            expect(thor.abilities).not_to include(9)
        end

        # it 'tests let instance' do
        #     binding.pry
        # end

end

# binding.pry